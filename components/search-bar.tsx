import React from "react";

const SearchBar = () => {
  return (
    <div className=" w-full shadow-lg flex justify-center items-center">
      <input
        type="text"
        placeholder="Search for your dream home.."
        className=" border-[3px] border-white w-full max-w-xs p-6 rounded"
      />
    </div>
  );
};

export default SearchBar;
