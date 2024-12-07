"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navigation = () => {
    const pathname=usePathname();

  return (
    <nav>
        <Link href="/" className={pathname==="/" ? "font-bold mr-4":" text-blue-500 mr-4"}>
        Home
        </Link>
        <Link href="/about" className={pathname==="/about" ? "font-bold mr-4":" text-blue-500 mr-4"}>
        About
        </Link>
        <Link href="/products/tv" className={pathname.startsWith("/products/tv") ? "font-bold mr-4":" text-blue-500 mr-4"}>
            Product1 
        </Link>


    </nav>
  )
}

export default Navigation