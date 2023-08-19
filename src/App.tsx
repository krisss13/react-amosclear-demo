import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
