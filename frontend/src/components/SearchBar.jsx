import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import debounce from "lodash.debounce";

const SearchBar = ({ placeholder = "Search books..." }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const fetchSuggestions = debounce(async (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(`/api/v1/books/all-books?q=${query}`);
      setSuggestions(response.data.data || []);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setSuggestions([]);
    }
  }, 300);

  useEffect(() => {
    fetchSuggestions(searchTerm);
    return () => fetchSuggestions.cancel(); // Cleanup
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/books?q=${encodeURIComponent(trimmed)}`);
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (book) => {
    navigate(`/books/${book.id}`);
    setSearchTerm("");
    setSuggestions([]);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto px-2 sm:px-4">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full sm:w-[250px] lg:w-[350px] px-4 py-2 rounded-full text-white bg-black/40 border border-white/30 placeholder-white/60 
            focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/60 transition duration-300"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
        />
        <button
          type="submit"
          className="px-3 sm:px-4 py-2 rounded-2xl bg-gray-900 hover:bg-gray-600 text-white text-sm sm:text-base"
        >
          Search
        </button>
      </form>

      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute z-50 mt-2 w-full max-h-60 overflow-y-auto bg-white shadow-lg rounded-md text-black">
          {suggestions.map((book) => (
            <li
              key={book.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
              onClick={() => handleSuggestionClick(book)}
            >
              {book.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

