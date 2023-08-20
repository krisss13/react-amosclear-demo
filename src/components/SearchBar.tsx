import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  handleSearch: (searchKey: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:border-purple-700 text-purple-700"
      />
      <button
        type="button"
        className='bg-gray-50'
        onClick={() => handleSearch(searchTerm)}
      >
        <FontAwesomeIcon icon={faSearch} className="mr-1" />
      </button>
    </div>
  );
};

export default SearchBar;
