import React from 'react';
import { Item } from '../mockData';
import ItemList from '../components/ItemList';

interface HomeProps {
  items: Item[];
  onToggleFavorite: (itemId: number) => void;
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="home">
      <h1 className="text-3xl font-semibold mt-8 mb-4">Discover Items</h1>
      <ItemList {...props} />
    </div>
  );
};

export default Home;
