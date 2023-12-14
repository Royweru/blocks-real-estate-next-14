import React from 'react'
import { IconType } from 'react-icons'

interface BoxProps{
    title?:string,
    desc?:string,
    link?:string,
    icon?:IconType
}
const Box:React.FC<BoxProps> = ({
    title,
    desc,
    link,
    icon:Icon
}) => {
  return (
    <div className='w-full bg-slate-50 p-5 justify-between items-center flex flex-col'>
      <div className=' w-full flex flex-col justify-evenly items-center gap-y-2'>
        <div className=' flex  justify-between items-center w-full'>
          {title}
        </div>
        <p className=' text-sm font-semibold font-sans text-neutral-100'>
            {desc}
        </p>
      </div>
      <div className=' underline text-sm font-light font-serif'>
         {link}
      </div>
    </div>
  )
}

export default Box