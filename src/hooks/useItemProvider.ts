import { useState } from 'react';
import mockData from '../mockData';

const useItemProvider = () => {
  const [items, setItems] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const pageSize = 10;
  // eslint-disable-next-line max-len
  const filterResult = (value = '' ) => items.filter((item) => item.title.toLowerCase().includes(value ? value.toLowerCase() :searchValue.toLowerCase())) || [];

  const [filteredItems, setFilteredItems] = useState({
    items: filterResult().slice((currentPage - 1) * pageSize, currentPage * pageSize),
    totalPages: items.length / pageSize,
  });

  const favoriteCount = items.filter((item) => item.isFavorite).length;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setFilteredItems({
      items: filterResult().slice((newPage - 1) * pageSize, newPage * pageSize),
      totalPages: filterResult().length / pageSize,
    });
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setFilteredItems({
      items: filterResult(value).slice((currentPage - 1) * pageSize, currentPage * pageSize),
      totalPages: filterResult(value).length / pageSize,
    });
  };

  const handleToggleFavorite = (itemId: number) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === itemId
      ? { ...item, isFavorite: !item.isFavorite }
      : item)));
    setFilteredItems(({ items: prevItems, totalPages }) => ({
      items: prevItems.map((item) => (item.id === itemId
        ? { ...item, isFavorite: !item.isFavorite }
        : item)),
      totalPages,
    }));
  };

  return {
    items,
    filteredItems,
    currentPage,
    setItems,
    favoriteCount,
    handleToggleFavorite,
    handlePageChange,
    handleSearch,
  };
};

export default useItemProvider;
