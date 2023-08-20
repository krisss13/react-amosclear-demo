import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-purple-700 py-6">
    <div className="container mx-auto flex justify-between items-center">
      <div className="font-bold bg-white rounded-full p-3">
        <Link to="/" className="flex items-center">
          <img src="/logo_transparent.png" alt="Logo" className="w-14 h-14" />
        </Link>
      </div>
      <div className="flex space-x-4">
        <a href="/" className="text-white hover:text-gray-300">
          <FontAwesomeIcon icon={faFacebook} className="text-xl" />
        </a>
        <a href="/" className="text-white hover:text-gray-300">
          <FontAwesomeIcon icon={faTwitter} className="text-xl" />
        </a>
        <a href="/" className="text-white hover:text-gray-300">
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
