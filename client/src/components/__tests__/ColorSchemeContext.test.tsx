import { Appearance } from 'react-native';


test('default color scheme is light', () => {
  expect(Appearance.getColorScheme()).toBe('light');
});

