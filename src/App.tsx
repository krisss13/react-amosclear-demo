import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ItemDetailPage from './pages/ItemDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import useItemProvider from './hooks/useItemProvider';

function App() {
  const {
    items,
    filteredItems,
    currentPage,
    favoriteCount,
    handleToggleFavorite,
    handlePageChange,
    handleSearch,
  } = useItemProvider();

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navigation favoriteCount={favoriteCount} handleSearch={handleSearch} />
        <div className="container mx-auto p-4">
          <Routes>
            <Route
              path="/"
              element={(
                <Home
                  items={filteredItems.items}
                  onToggleFavorite={handleToggleFavorite}
                  currentPage={currentPage}
                  totalPages={filteredItems.totalPages}
                  handlePageChange={handlePageChange}
                />
              )}
            />
            <Route
              path="/item/:id"
              element={(
                <ItemDetailPage
                  items={items}
                  onToggleFavorite={handleToggleFavorite}
                />
              )}
            />
            <Route
              path="/favorites"
              element={(
                <FavoritesPage
                  items={items}
                  onToggleFavorite={handleToggleFavorite}
                />
              )}
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
