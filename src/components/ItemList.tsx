import React from 'react';
import { Item } from '../mockData';
import ItemComponent from './Item';
import Pagination from './Pagination';

interface ItemListProps {
  items: Item[];
  onToggleFavorite: (itemId: number) => void;
  currentPage?: number;
  totalPages?: number;
  handlePageChange?: (newPage: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  onToggleFavorite,
  currentPage,
  totalPages,
  handlePageChange,
}) => (
  <>
    <div className="item-list">
      {items.map((item) => (
        <ItemComponent
          key={item.id}
          item={item}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
    {currentPage && totalPages && handlePageChange && (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
    )}
  </>
);

ItemList.defaultProps = {
  currentPage: undefined,
  totalPages: undefined,
  handlePageChange: undefined,
};

export default ItemList;
