import { Home } from 'lucide-react'
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
    <div className='  h-[250px] border-[2px] border-black p-3 justify-between items-center flex flex-col rounded-lg'>
      <div className=' w-full flex flex-col justify-evenly items-center gap-y-2'>
        <div className=' flex justify-between w-full items-center mb-3'> 
        <div className=' text-2xl font-bold font-sans text-emerald-600'>
          {title}
        </div>
        <div>
            <Home />
        </div>
        </div>
       
        <p className=' text-sm font-semibold font-sans text-black'>
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