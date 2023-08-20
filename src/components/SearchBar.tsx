import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={() => handleSearch(searchTerm)}
      >
        <FontAwesomeIcon icon={faSearch} className="mr-1" />
      </button>
    </div>
  );
};

export default SearchBar;
