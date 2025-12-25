"use client"

import React, { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

type Item = { id: string; title: string; price: string; category: string }

const SAMPLE: Item[] = [
  { id: 'p1', title: 'Dress', price: '$79', category: 'Fashion' },
  { id: 'p2', title: 'Hody', price: '$24', category: 'Fashion' },
  { id: 'p3', title: 'Hody', price: '$59', category: 'Fashion' },
  { id: 'p4', title: 'Tring Casual', price: '$49', category: 'Fashion' },
]

const OurCategory = () => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const items = useMemo(() => {
    return SAMPLE.filter(i => {
      const matchesQuery = i.title.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || i.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Our Categories</h1>
            <p className="text-sm text-slate-600">Explore popular items across categories.</p>
          </div>
          <div className="flex items-center gap-3">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products" className="px-3 py-2 rounded border" />
            <select value={category} onChange={e => setCategory(e.target.value)} className="px-3 py-2 rounded border">
              <option>All</option>
              <option>Electronics</option>
              <option>Home & Garden</option>
              <option>Fashion</option>
            </select>
            <Button onClick={() => { setQuery(''); setCategory('All') }}>Reset</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <article key={item.id} className="bg-white p-4 rounded shadow">
              <Image src={`/Images/similar_item_${(idx % 5) + 1}.svg`} alt={item.title} width={400} height={240} className="w-full h-40 object-contain rounded mb-3" />
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.category}</p>
              <div className="mt-3 flex items-center justify-between">
                <strong>{item.price}</strong>
                <Link href="/our-category/product-details" className="text-sm text-blue-600 hover:underline">View</Link>
              </div>
            </article>
          ))}

          {items.length === 0 && (
            <div className="col-span-full text-center text-slate-600 py-8">No products match your search.</div>
          )}
        </div>
      </div>
    </main>
  )
}

export default OurCategory