import React from 'react';
import { Item } from '../mockData';
import ItemList from '../components/ItemList';
import Hero from '../components/Hero';

interface HomeProps {
  items: Item[];
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  onToggleFavorite: (itemId: number) => void;
}

const Home: React.FC<HomeProps> = ({
  items,
  onToggleFavorite,
  currentPage,
  totalPages,
  handlePageChange,
}) => (
  <div className="home">
    <Hero title="Discover Items" />
    <ItemList
      items={items}
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
      onToggleFavorite={onToggleFavorite}
    />
  </div>
);

export default Home;
