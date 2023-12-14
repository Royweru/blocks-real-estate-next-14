"use client"
import React from 'react'
interface BillboardProps{
    children:React.ReactNode
}

const Billboard:React.FC<BillboardProps> = ({
    children
}) => {
  return (
    <div className=" w-full h-[500px] mb-5 bg-[url('/images/bg1.jpeg')] flex flex-col justify-start items-start space-y-8 bg-cover bg-center">
       {children}
    </div>
  )
}

export default Billboard