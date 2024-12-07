import React from 'react'
import Link from 'next/link'
const navigation = () => {
  return (
    <nav>
        <Link href="/" className='mr-4 text-blue-500'>
        Home
        </Link>
        <Link href="/about" className='mr-4 text-blue-500'>
        About
        </Link>
        <Link href="/products/tv" className='mr-4 text-blue-500'>
            Product1 
        </Link>


    </nav>
  )
}

export default navigation