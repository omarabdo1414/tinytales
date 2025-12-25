
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <header className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">Discover quality products, curated for you</h1>
            <p className="text-slate-600 mb-6 max-w-xl">Browse trending categories, explore featured items, and find something you love. Fast shipping and trusted sellers.</p>
            <div className="flex gap-3">
              <Link href="/our-category" className="inline-block px-5 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Shop Categories</Link>
              <Link href="#featured" className="inline-block px-5 py-3 border border-slate-200 rounded-md text-slate-700 hover:bg-slate-50">See Featured</Link>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <Image src="/Images/TrendLine.png" alt="hero" width={1200} height={480} className="w-full rounded-md" />
            </div>
          </div>
        </div>
      </header>

      <section id="featured" className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/our-category" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">Electronics</h3>
            <p className="text-sm text-slate-600">Latest gadgets, accessories and more.</p>
          </Link>

          <Link href="/our-category" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">Home & Garden</h3>
            <p className="text-sm text-slate-600">Essentials to make your space cozy.</p>
          </Link>

          <Link href="/our-category" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">Fashion</h3>
            <p className="text-sm text-slate-600">Seasonal styles and wardrobe staples.</p>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Why customers choose us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">
            <strong>Free returns</strong>
            <p className="text-sm text-slate-600">Easy returns within 30 days.</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <strong>Fast shipping</strong>
            <p className="text-sm text-slate-600">Reliable delivery on time.</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <strong>Secure payments</strong>
            <p className="text-sm text-slate-600">Safe checkout and privacy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
