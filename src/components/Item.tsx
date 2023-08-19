import React from 'react';
import { Item } from '../mockData';

interface ItemProps {
  item: Item;
  onToggleFavorite: (itemId: number) => void;
}

const ItemComponent: React.FC<ItemProps> = ({ item, onToggleFavorite }) => {
  return (
    <div className="item">
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button type="button" onClick={() => onToggleFavorite(item.id)}>
        {item.isFavorite ? 'Unmark as Favorite' : 'Mark as Favorite'}
      </button>
    </div>
  );
};

export default ItemComponent;
