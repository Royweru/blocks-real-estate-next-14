"use client";

import React, { useState, useCallback } from "react";
import Logo from "./logo";


const MiniNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <nav className="border-gray-200 mb-10 relative">
      <div className="w-full mx-auto gap-x-4 flex items-center h-full">
        <div className="mx-2 flex  items-center justify-between">
          <a href="/" className="flex">
           <Logo />
            <span className="self-center text-lg font-semibold whitespace-nowrap">
              Blocks
            </span>
          </a>
          <div className="flex md:hidden md:order-2">
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              onClick={toggleOpen}
              className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex justify-between items-end w-full md:w-auto md:order-1  ">
            <ul className="flex-col md:flex-row flex md:space-x-8 items-center justify-between mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="/rent"
                  className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded  text-lg font-bold"
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
            </ul>
          </div>
          <div className="md:hidden">
            {isOpen && (
              <ul className="flex-col absolute  bg-slate-400 p-4 md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href="/"
                    className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                    aria-current="page"
                  >
                    Sell
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
    </nav>
  );
};

export default MiniNavbar;
