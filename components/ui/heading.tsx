import React from 'react'
 interface HeadingProps{
    title?:string,
    subtitle?:string
 }
const Heading:React.FC<HeadingProps> = ({
    title,
    subtitle
}) => {
  return (
    <div className=' w-full text-center   flex flex-col justify-between items-center'>
       <div className=' font-bold text-2xl text-emerald-300'>
         {title}
       </div>
       <p className=' txt-sm font-bold text-neutral-300 font-serif'>
        {subtitle}
       </p>
    </div>
  )
}

export default Heading