import Image from 'next/image'
import React from 'react'
import { UserButton, currentUser } from '@clerk/nextjs'
import { Button } from '../ui/button'
interface UserAvatarProps{
    src?:string
}
const UserAvatar:React.FC<UserAvatarProps> = async({
    src
}) => {
  const user = await currentUser()
 
  return (
    <>
    <div className=' rounded-md flex justify-center items-center'>
     <Button variant="destructive" className=' flex justify-center items-center rounded-md'>
       Create 
       Listing
     </Button>
    </div>
    <div className='  flex justify-center items-center'>
     <UserButton afterSignOutUrl='/'/>
    </div>
  </>

  )
}

export default UserAvatar