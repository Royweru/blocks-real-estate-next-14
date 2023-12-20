import { Home, LandPlot, SpaceIcon } from "lucide-react";
import React from "react";
import Heading from "./ui/heading";


const ShowCase = () => {
  return (
    <>
      <div
        className="  bg-slate-100 flex flex-col  w-full py-10 
       gap-y-5 justify-center items-center px-10 "
      >
        <Heading title=" Some amaizing properties" />
        <div className=" w-full flex justify-center items-center">
          <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-1 mx-auto">
            <div className="  bg-[url('/images/bg2.webp')] col-span-2 h-[500px] rounded-md" />
            <div className=" h-[500px] col-span-2  border-[2px]  border-transparent bg-slate-100 hover:outline-black 
            hover:cursor-pointer outline-2 flex group  justify-center items-center rounded-md">
              <p className=" font-mono font-semibold text-sm text-neutral-600 leading-9 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className=" h-[500px] col-span-2  border-[2px]  border-transparent 
            bg-slate-100 hover:outline-emerald-100 
            hover:cursor-pointer flex  justify-center rounded-md">
              <p className=" font-mono font-semibold text-sm text-neutral-600 leading-9 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="  bg-[url('/images/bg3.webp')] col-span-2 h-[500px] rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
