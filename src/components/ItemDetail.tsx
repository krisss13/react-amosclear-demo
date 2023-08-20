import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../mockData';
import Slider from './Slider';

interface ItemDetailProps {
  item: Item;
  onToggleFavorite: (itemId: number) => void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, onToggleFavorite }) => (
  <>
    <div className="gap-4">
      <Slider items={item.images} title={item.title} />
    </div>
    <div className="self-center">
      <h2 className="text-xl text-purple-700 font-semibold py-3">{item.title}</h2>
      <div className="flex flex-col items-center">
        <p className="text-gray-600 font-medium">
          Price: &nbsp;
          {item.price}
        </p>
        <p className="text-red-500 font-medium">
          Discount: &nbsp;
          {item.discountPercentage}
          %
        </p>
        <p className="text-gray-600">
          Stock:  &nbsp;
          {item.stock}
        </p>
      </div>
      <p className="text-gray-600 my-4">{item.description}</p>

      <button
        type="button"
        onClick={() => onToggleFavorite(item.id)}
        className={item.isFavorite ? 'bg-purple-800/80 mt-2 rounded-full' : 'bg-gray-100/90 mt-2 rounded-full'}
      >
        <FontAwesomeIcon icon={faStar} className={item.isFavorite ? 'text-yellow-500 ' : ''} />
      </button>
    </div>
  </>
);

export default ItemDetail;
