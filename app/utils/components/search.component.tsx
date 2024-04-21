import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

import { useTheme } from '../../Theme/theme';

export const SearchBar = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <Searchbar
      mode="view"
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    ></Searchbar>
  );
};
