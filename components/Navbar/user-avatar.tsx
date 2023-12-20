import Image from 'next/image'
import React from 'react'
import { UserButton, currentUser } from '@clerk/nextjs'
interface UserAvatarProps{
    src?:string
}
const UserAvatar:React.FC<UserAvatarProps> = ({
    src
}) => {

  return (
 <>
   <div className='  flex justify-center items-center'>
    <UserButton afterSignOutUrl='/'/>
   </div>
 </>
  )
}

export default UserAvatar