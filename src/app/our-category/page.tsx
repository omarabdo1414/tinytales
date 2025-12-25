import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const OurCategory = () => {
  return (
    <div className='flex items-center justify-center'>
      <Button>
        <Link href='/our-category/product-details'>
          Product Page
        </Link>
      </Button>
    </div>
  )
}

export default OurCategory;