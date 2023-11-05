import { Appearance } from 'react-native';

test('default color scheme is light', () => {
  expect(Appearance.getColorScheme()).toBe('light');
});

test('reducer function return colorScheme', () => {
  const reducer = (_: any, colorScheme: any) => {
    return colorScheme;
  };
  const colorScheme = { colorScheme: 'dark' };
  expect(reducer(null, colorScheme)).toBe(colorScheme);
});
