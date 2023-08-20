import React from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../mockData';
import ItemDetail from '../components/ItemDetail';

interface ItemDetailPageProps {
  items: Item[];
  onToggleFavorite: (itemId: number) => void;
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({
  items,
  onToggleFavorite,
}) => {
  const { id } = useParams<{ id: string }>();
  const itemId = id ? parseInt(id, 10) : 0;
  const selectedItem = items.find((item) => item.id === itemId);

  if (!selectedItem) {
    return <div>Item not found.</div>;
  }

  return (
    <div className="item-detail-page bg-white rounded p-4 lg:mt-6">
      <ItemDetail item={selectedItem} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

export default ItemDetailPage;
