
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p className="mb-6">Click the button to go to the next page.</p>
        <Link href="/our-category" className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go to Category
        </Link>
      </div>
    </main>
  );
}
