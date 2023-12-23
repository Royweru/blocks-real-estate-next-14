"use client"
import React ,{useState,useCallback} from "react";
import Logo from "./logo";
import MiniNavbar from "./mini-navbar";
import { Menu } from "lucide-react";
import useCreateListingModal from "@/hooks/use-create-listing-modal";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const {onOpen} = useCreateListingModal()
  return (
    <nav className="border-gray-200 mb-3 flex justify-center items-center bg-slate-400 w-full h-[100px] rounded">
    <div className="mx-auto gap-x-4 flex items-center h-full w-2/3">
      <div className="mx-2 flex items-center justify-between w-full">
        <a href="/" className="flex items-center">
          {/* Assuming you have a Logo component */}
          <Logo />
          <span className="self-center text-lg font-semibold whitespace-nowrap ml-2">
            Blocks
          </span>
        </a>
        <div className="flex md:hidden md:order-2 left-28 absolute">
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            onClick={toggleOpen}
            className="md:hidden text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
           <Menu className=" w-10 h-10" />
          </button>
        </div>
        <div className="hidden md:flex justify-between items-center w-full md:w-auto relative">
          <ul className="flex md:space-x-8 items-center justify-center mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/rent"
                className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 rounded text-lg font-bold"
                aria-current="page"
              >
                Rent
              </a>
            </li>
            <li>
              <a
                href="/buy"
                className="text-gray-700 hover:bg-gray-50 border-b text-lg border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-md font-bold"
              >
                Buy
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-700 hover:bg-gray-50 text-lg border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-md font-bold"
              >
                Blog
              </a>
            </li>
            <li>
              <div
               onClick={onOpen}
              className="text-gray-700 hover:bg-gray-50 
              text-lg border-b border-gray-100 md:hover:bg-transparent 
              md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 
              md:p-0 text-md font-bold hover:cursor-pointer"
              >
                New
              </div>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          {isOpen && (
            <ul className="flex-col absolute bg-slate-400 p-4 md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="/"
                  className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                  aria-current="page"
                >
                 Rent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Buy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Blog
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
    <div className=" w-1/3 flex justify-center items-center">
       <MiniNavbar />
    </div>
  </nav>
  
  );
};
