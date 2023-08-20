import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Navigation = ({ favoriteCount, handleSearch }) => {
  return (
    <div className="bg-white">
      <nav className="mx-auto container p-4 text-white flex justify-between items-center">
        <Link to="/" className="font-semibold text-lg">
          <img src="/logo_transparent.png" className="" alt="e-demo" />
        </Link>
        <div className="flex items-center space-x-4">
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
};

export default Navigation;
