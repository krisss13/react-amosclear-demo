import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons';
import { Item } from '../mockData';
import ItemList from '../components/ItemList';
import Hero from '../components/Hero';

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
      {favoriteItems.length && (
        <>
          <Hero title="Favorites Page" />
          <ItemList items={favoriteItems} onToggleFavorite={onToggleFavorite} />
        </>
      )}

      {!favoriteItems.length && (
        <div className="mt-20">
          <h2 className="text-purple-800 text-4xl	mb-4">Empty Favorite list </h2>
          <FontAwesomeIcon icon={faFaceSadTear} className="text-purple-800 text-7xl" />
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
