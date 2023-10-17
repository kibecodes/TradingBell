import React from 'react';
import { View, Text } from 'react-native';

import DisplayCompanies from './[item]';
import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
} from '../../../../src/components/portfolio.styles';

export default function Portfolio() {
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}>
      <OrderCard>
        <OrderLogo>
          <Text>logo</Text>
        </OrderLogo>
        <Order/>
        <OrderNumbers />
      </OrderCard>
      <DisplayCompanies/>
    </View>
  );
}
