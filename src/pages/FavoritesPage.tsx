import React from 'react';
import { Item } from '../mockData';
import ItemList from '../components/ItemList';

interface FavoritesPageProps {
  items: Item[];
  onToggleFavorite: (itemId: number) => void;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({
  items,
  onToggleFavorite,
}) => {
  const favoriteItems = items.filter((item) => item.isFavorite);

  return (
    <div className="favorites">
      <h1>Favorites Page</h1>
      <ItemList items={favoriteItems} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

export default FavoritesPage;
