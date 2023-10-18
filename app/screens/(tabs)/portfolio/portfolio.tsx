import React from 'react';
import { View, Text } from 'react-native';

import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
} from './portfolio.styles';

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
            EURUSD
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
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            USDJPY
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>
            U.S. Dollar/Japanese Yen
          </Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            139.3550
          </Text>
          <Text style={{ color: '#d7384d' }}>-0.80 (-0.37%)</Text>
        </OrderNumbers>
      </OrderCard>
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            Boe
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>
              Boeing Co
          </Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            217.31
          </Text>
          <Text style={{ color: '#d7384d' }}>-0.00759 (-0.77%)</Text>
        </OrderNumbers>
      </OrderCard>
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            Crude Oil
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>
              Crude Oil
          </Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            70.35
          </Text>
          <Text style={{ color: '#d7384d' }}>-0.94 (-1.32%)</Text>
        </OrderNumbers>
      </OrderCard>
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            AUDUSD
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>
              Aussie /U.S. Dollar
          </Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            217.31
          </Text>
          <Text style={{ color: '#22B496' }}>+0.0025 (+0.3661%)</Text>
        </OrderNumbers>
      </OrderCard>
    </View>
  );
}
