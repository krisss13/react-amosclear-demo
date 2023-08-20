import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../mockData';

interface ItemProps {
  item: Item;
  onToggleFavorite: (itemId: number) => void;
}

const ItemComponent: React.FC<ItemProps> = ({ item, onToggleFavorite }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    onToggleFavorite(item.id);
  };

  return (
    <Link
      to={`/item/${item.id}`}
      className="flex"
    >
      <div className="bg-white rounded-xl p-4 shadow-md h-full flex flex-col items-center relative">
        <div className="h-full">
          <img src={item.thumbnail} alt={item.title} className="w-full h-32 object-cover mb-4" />
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          className={item.isFavorite ? 'bg-purple-800/80 mt-2 rounded-full absolute right-8' : 'bg-gray-100/90 mt-2 rounded-full absolute right-8'}
        >
          <FontAwesomeIcon icon={faStar} className={item.isFavorite ? 'text-yellow-500 ' : ''} />
        </button>
      </div>
    </Link>
  );
};

export default ItemComponent;
