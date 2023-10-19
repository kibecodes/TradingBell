import { useSelector } from 'react-redux';

import { darkTheme, lightTheme } from '../../redux/constants/themeConstants';
import { selectThemeMode } from '../../redux/slices/themeSlice';

export function useTheme() {
  const themeMode = useSelector(selectThemeMode);
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return theme;
}
