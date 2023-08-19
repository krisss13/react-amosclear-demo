import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../mockData';
import ItemList from '../components/ItemList';

interface HomeProps {
  items: Item[];
  onToggleFavorite: (itemId: number) => void;
}

const Home: React.FC<HomeProps> = ({ items, onToggleFavorite }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Home Page</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ItemList items={filteredItems} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

export default Home;
