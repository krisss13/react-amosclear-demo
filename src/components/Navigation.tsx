import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

interface NavigationProps {
  favoriteCount: number;
  handleSearch: (searchKey: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ favoriteCount, handleSearch }) => (
  <div className="bg-white">
    <nav className="mx-auto container p-4 text-white md:flex md:justify-between items-center">
      <Link to="/" className="font-semibold text-lg place-content-center md:place-content-center flex mb-4 md:mb-0">
        <img src="/logo_transparent.png" className="" alt="e-demo" />
      </Link>
      <div className="flex items-center space-x-4 place-content-center md:place-content-right">
        <SearchBar handleSearch={handleSearch} />
        <Link to="/favorites" className="btn-link">
          <FontAwesomeIcon icon={faStar} className="mr-1" />
          {favoriteCount > 0 && (
          <span className="bg-yellow-500 text-xs rounded-full px-2 py-1 ml-1">
            {favoriteCount}
          </span>
          )}
        </Link>
      </div>
    </nav>
  </div>
);

Navigation.propTypes = {
  favoriteCount: PropTypes.number.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Navigation;
