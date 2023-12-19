import React from "react";

const SearchBar = () => {
  return (
    <div className=" w-full shadow-lg flex justify-center items-center p-5 rounded-md flex-col gap-y-2">
      <div className=" w-full flex justify-center items-center gap-x-3">
        <div className="p-5 rounded bg-slate-500 w-2/4 flex 
        justify-center items-center text-lg font-bold hover:cursor-pointer 
        hover:opacity-80 transition ">
          Buy
        </div>
        <div className="p-5 rounded bg-slate-500 w-2/4 flex 
        justify-center items-center text-lg font-bold hover:cursor-pointer 
         hover:opacity-80 transition
        ">
          Rent
        </div>
      </div>
      <input
        type="text"
        placeholder="Search for your dream home.."
        className=" border-[3px] border-emerald-200 w-full p-6 rounded"
      />
    </div>
  );
};

export default SearchBar;
