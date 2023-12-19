
import React from 'react'
import Logo from './logo'
import { Menu } from 'lucide-react'

const MiniNavbar = () => {
  return (
    
    <nav className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Logo />
      </div>
      <div className="hidden md:block">
        <div className='md:hidden'>
          <Menu className=' w-5 h-5 text-white mr-5'/>
        </div>
        <ul className="flex items-center space-x-4">
          <li className="relative group">
            <a href="#" className="text-white hover:text-gray-300 ">Home</a>
          </li>
          <li className="relative group">
            <a href="#" className="text-white hover:text-gray-300 hover:underline">About</a>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white py-2 rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Our Story</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Team</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Mission</a>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="text-white hover:text-gray-300">Services</a>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white py-2 rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 3</a>
            </div>
          </li>
          
        </ul>
      </div>
    </nav>

  
  )
}

export default MiniNavbar