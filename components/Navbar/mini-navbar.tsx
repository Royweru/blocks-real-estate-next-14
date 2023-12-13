import { Home } from 'lucide-react'
import React from 'react'
export const navbarElements =[
    { name:"Home",icon:Home,href:"/"},
    { name:"Buy",href:"/buy"},
    {name:"Rent",href:"/rent"}
]
const MiniNavbar = () => {
  return (
    <div className=' flex justify-center items-center w-2/3 relative ml-auto'>
        <ul className=' relative flex flex-row gap-x-5 '>
        {navbarElements.map(element=>(
            <li key={element.href} className=' text-orange-950 font-bold'>
                 {element.name}
            </li>
          ))}
        </ul>
        
    </div>
  )
}

export default MiniNavbar