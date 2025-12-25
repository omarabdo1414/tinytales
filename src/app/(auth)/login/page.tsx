'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signIn } from 'next-auth/react';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: '/products',
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      if (result?.url) {
        router.push(result.url);
      }
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: error instanceof Error ? error.message : 'Login failed',
      });
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-white">
        <Image src="/Images/Login.png" alt="login illustration" width={520} height={520} className="max-w-[520px] w-full" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full space-y-6 px-8">
          <div className="text-center">
            <Image src="/Images/TrendLine.png" alt="logo" width={260} height={56} className="mx-auto h-14 mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900">Laravel 👋</h2>
            <p className="mt-2 text-sm text-gray-500">Welcome to the Laravel application control panel</p>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                {...register('email')}
                type="email"
                className="block w-full px-4 py-2 border rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Enter your email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <Link href="/auth/forgot" className="text-sm text-purple-600 hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className="block w-full px-4 py-2 border rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>

            {errors.root && <div className="text-red-600 text-sm text-center">{errors.root.message}</div>}

            <div className="flex items-center space-x-2">
              <input id="remember" type="checkbox" className="h-4 w-4 text-purple-600 rounded border-gray-300" />
              <label htmlFor="remember" className="text-sm text-gray-700">Remember Me</label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md shadow-sm hover:opacity-95 disabled:opacity-50"
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500">Made with <span className="text-red-500">❤</span> by Trend line</p>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account? <Link href="/register" className="text-purple-600 font-medium">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}