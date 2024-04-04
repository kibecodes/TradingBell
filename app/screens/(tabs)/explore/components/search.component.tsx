import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    ></Searchbar>
  );
};
