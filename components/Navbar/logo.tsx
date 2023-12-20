"use client"
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
   <div className=' flex justify-center items-center '>
      <div className=' relative w-[35px] h-[35px]'>
          <Image 
           fill
           className=' bg-cover bg-center rounded-full'
           src={"/images/logo.jpg"}
           alt=''
           />
      </div>
   </div>
  )
}

export default Logo