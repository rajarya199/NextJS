"use client"
import React from 'react'
import { useState } from 'react'

const Counter = () => {
    console.log("counter component")
    const [count,setCount]=useState(0)
  return (
    <div className='p-2'>
<button className='bg-red-400 text-xl rounded-md' onClick={()=>setCount(count+1)}> Clicked me </button>
<h2> count is {count}</h2>

    </div>
  )
}

export default Counter