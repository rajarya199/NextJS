"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const About = () => {
  const router=useRouter()
  return (
    <div>
      <h1>
      About us page
        </h1>
        <button onClick={()=>router.push('/')}
        className='bg-blue-500 text-white p-3 ml-2 rounded-md'>
            Go to HomePage
        </button>
        
        </div>
  )
}

export default About