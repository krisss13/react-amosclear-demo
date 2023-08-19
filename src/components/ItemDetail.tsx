import React from 'react';
import { Item } from '../mockData';

interface ItemDetailProps {
  item: Item;
  onToggleFavorite: (itemId: number) => void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, onToggleFavorite }) => {
  return (
    <div className="item-detail">
      <img src={item.thumbnail} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <button type="button" onClick={() => onToggleFavorite(item.id)}>
        {item.isFavorite ? 'Unmark as Favorite' : 'Mark as Favorite'}
      </button>
    </div>
  );
};

export default ItemDetail;
