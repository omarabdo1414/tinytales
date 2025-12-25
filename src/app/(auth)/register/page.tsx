"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const registerSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload?.message || res.statusText || 'Registration failed');
      }

      router.push('/products');
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: error instanceof Error ? error.message : 'Registration failed',
      });
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-white">
        <Image src="/Images/Login.png" alt="illustration" width={520} height={520} className="max-w-[520px] w-full" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full space-y-6 px-8">
          <div className="text-center">
            <Image src="/Images/TrendLine.png" alt="logo" width={260} height={56} className="mx-auto h-14 mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-500">Start your journey with Trend Line</p>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                {...register('email')}
                type="email"
                className="block w-full px-4 py-2 border rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                {...register('password')}
                type="password"
                className="block w-full px-4 py-2 border rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Password"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                {...register('confirmPassword')}
                type="password"
                className="block w-full px-4 py-2 border rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
            </div>

            {errors.root && <div className="text-red-600 text-sm text-center">{errors.root.message}</div>}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md shadow-sm hover:opacity-95 disabled:opacity-50"
              >
                {isSubmitting ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account? <Link href="/login" className="text-purple-600 font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}