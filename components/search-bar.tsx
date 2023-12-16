import React from "react";

const SearchBar = () => {
  return (
    <div className=" w-full shadow-lg">
      <input
        type="text"
        placeholder="Search for your dream home.."
        className=" border-[2px] border-black w-full max-w-xs p-6 rounded"
      />
    </div>
  );
};

export default SearchBar;
