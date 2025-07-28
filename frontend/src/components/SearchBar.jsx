import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder = "Search books..." }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/books?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
       <input
  type="text"
  placeholder="Search books..."
className="px-4 py-2 w-[250px] rounded-full text-white bg-black/40 border border-white/30 placeholder-white/60 
focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/60 transition duration-300"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      navigate(`/books?q=${encodeURIComponent(searchTerm)}`);
    }
  }}
/>
      <button type="submit" className=" bg-gray-900 hover:bg-gray-600 text-white px-4 py-2  rounded-2xl ">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
