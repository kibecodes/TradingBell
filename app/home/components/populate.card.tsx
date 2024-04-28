import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { useTheme } from '../../Theme/theme';
import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
} from '../components/populate.styles';
import { FetchedDataState } from '../populate';

interface Props {
  fetchedData: FetchedDataState;
}

export const PopulateCard: React.FC<Props> = ({ fetchedData }) => {
  const [isCheckedState, setIsCheckedState] = useState(
    Array(fetchedData.crytposData.length).fill(false),
  );
  const theme = useTheme();

  const handleCheck = (index: number) => {
    const newCheckedState = [...isCheckedState];
    newCheckedState[index] = !newCheckedState[index];
    setIsCheckedState(newCheckedState);
  };

  const { crytposData } = fetchedData;
  console.log('crypto:', crytposData);

  return crytposData.map(({ ticker, request_id }, index) => (
    <OrderCard
      style={{ backgroundColor: theme.colors.mainForeground }}
      key={request_id}
    >
      <OrderLogo></OrderLogo>
      <Order>
        <Text
          style={{
            color: theme.colors.white,
            fontSize: theme.textVariants.broker.fontSize,
          }}
        >
          {ticker}
        </Text>
        <Text
          style={{
            color: theme.colors.grayText,
            fontSize: theme.textVariants.brokerInfo.fontSize,
          }}
        >
          Crypto
        </Text>
      </Order>
      <OrderNumbers>
        <Text
          style={{
            color: theme.colors.white,
            fontSize: theme.textVariants.broker.fontSize,
            fontWeight: '400',
          }}
        >
          $$
        </Text>
        <Text style={{ color: theme.colors.grayText }}>##</Text>
      </OrderNumbers>
      <Pressable onPress={() => handleCheck(index)}>
        {isCheckedState[index] ? (
          <AntDesign name="plus" size={26} color={theme.colors.white} />
        ) : (
          <AntDesign name="check" size={24} color={theme.colors.white} />
        )}
      </Pressable>
    </OrderCard>
  ));
};
