import React from 'react';
import { View, Text } from 'react-native';
// import { useSelector } from 'react-redux';

// import { darkTheme, lightTheme } from '../../redux/constants/themeConstants';
// import { selectThemeMode } from '../../redux/slices/themeSlice';
import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
} from '../../../src/components/portfolio.styles';

export default function Portfolio() {
  // const themeMode = useSelector(selectThemeMode);
  // console.log(`theme mode is ${themeMode}`);
  // const theme = themeMode === 'dark' ? darkTheme : lightTheme;
  // console.log(`current theme is ${theme}`);

  return (
    <View
      style={{
        paddingHorizontal: 10,
        // backgroundColor: theme.PRIMARY_BACKGROUND_COLOR
      }}>
      <OrderCard>
        <OrderLogo>
          <Text>logo</Text>
        </OrderLogo>
        <Order>
          <Text>Plus</Text>
        </Order>
        <OrderNumbers />
      </OrderCard>
    </View>
  );
}
