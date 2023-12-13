import Image from 'next/image'
import React from 'react'

interface UserAvatarProps{
    src?:string
}
const UserAvatar:React.FC<UserAvatarProps> = ({
    src
}) => {
  return (
 <>
   <div className='  flex justify-center items-center'>
     <div className=' relative w-[35px] h-[35px]'>
      <Image
       src={src||"/images/placeholder.jpg"}
       alt=''
       className=' bg-cover bg-center rounded-full'
       fill
       />
     </div>
   </div>
 </>
  )
}

export default UserAvatar