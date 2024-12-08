"use client"
import React from 'react'
import { useEffect } from 'react'
const Error = ({error}) => {
useEffect(()=>{
    console.log(error)
},[error])
  return (
    <div className='flex items-start justify-center h-screen'>
        <div className="text-2xl text-red-500">
            Error fetching users data
        </div>
        </div>
  )
}
export default Error