import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetailPage from './pages/ItemDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import mockData from './mockData';
import './App.css';

function App() {
  const [items, setItems] = useState(mockData);

  const handleToggleFavorite = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home items={items} onToggleFavorite={handleToggleFavorite} />
            }
          />
          <Route
            path="/item/:id"
            element={
              <ItemDetailPage
                items={items}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                items={items}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
