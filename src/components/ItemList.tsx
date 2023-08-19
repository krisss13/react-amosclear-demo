import React from 'react';
import { Item } from '../mockData';
import ItemComponent from './Item';

interface ItemListProps {
  items: Item[];
  onToggleFavorite: (itemId: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onToggleFavorite }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemComponent
          key={item.id}
          item={item}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ItemList;
