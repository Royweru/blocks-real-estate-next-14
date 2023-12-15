import React from 'react'
import MiniNavbar from './mini-navbar'
import UserAvatar from './user-avatar'
export const Navbar = () => {
  return (
   <div className=' flex justify-between w-full py-5 bg-white  mb-4 rounded-md  border-b-4 border-orange-300 px-1 shadow-lg m-2'>
    <div className=' relative'>
        <MiniNavbar />
    </div>
    <UserAvatar />
   </div>
  )
}
