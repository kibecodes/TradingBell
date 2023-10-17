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
        backgroundColor: '#0E1629',
        flex: 1,
      }}>
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            EUR/USD
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>
            Euro/ U.S. Dollar
          </Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            1.0749
          </Text>
          <Text style={{ color: '#d7384d' }}>-0.0037 (-0.3440%)</Text>
        </OrderNumbers>
      </OrderCard>
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            Tesla
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>
            Tesla, Inc.
          </Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            244.40
          </Text>
          <Text style={{ color: '#22B496' }}>+9.54 (4.06%)</Text>
        </OrderNumbers>
      </OrderCard>
      <DisplayCompanies />
    </View>
  );
}
