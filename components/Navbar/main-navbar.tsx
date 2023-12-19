import React from 'react'
import MiniNavbar from './mini-navbar'
import UserAvatar from './user-avatar'
export const Navbar = () => {
  return (
   <div className=' flex justify-between w-full py-3  bg-gray-800 mb-4  border-b-4  px-1 shadow-lg m-2 items-center'>
    <div className=' relative'>
        <MiniNavbar />
    </div>
  
   </div>
  )
}
