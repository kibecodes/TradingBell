import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView } from 'react-native';

import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
} from './components/watchlist.styles';
import { Box, Text, useTheme } from '../../../Theme/theme';
import { Line } from '../../../utils/components/line.styles';
import ModalComponent from '../../modal/[modal]';
import ModalScreen from '../../modal/modal.component';

interface FetchedResult {
  o: number;
  c: number;
  v: number;
}
interface FetchedResponse {
  ticker: string;
  request_id: string;
  results: [FetchedResult];
}

export default function Watchlist() {
  const [fetchedData, setFetchedData] = useState<FetchedResponse[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    async function fetchData() {
      const currencyPairs = ['EURUSD', 'USDJPY', 'GBPUSD', 'AUDUSD', 'USDCAD'];
      const apiBaseUrl = 'https://api.polygon.io';
      try {
        const fetchedData = await Promise.all(
          currencyPairs.map(async (currencyPair) => {
            const response = await fetch(
              `${apiBaseUrl}/v2/aggs/ticker/C:${currencyPair}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
            );
            const data: FetchedResponse = await response.json();
            return data;
          }),
        );
        setFetchedData(fetchedData);
      } catch (error: unknown) {
        console.error('Problem fetching data:', error);
      }
    }
    fetchData().catch((error) => {
      console.error('Problem fetching data:', error);
    });
  }, []);

  return fetchedData ? (
    <ScrollView>
      <Box
        data-testID="watchlist-component"
        style={{
          paddingHorizontal: 10,
          backgroundColor: theme.colors.mainBackground,
          flex: 1,
          paddingBottom: 20,
        }}
      >
        <Pressable onPress={openModal}>
          {fetchedData.map(({ request_id, ticker, results }) =>
            results.map((result) => (
              <OrderCard
                key={request_id}
                style={{ backgroundColor: theme.colors.mainForeground }}
              >
                <ModalComponent
                  isVisible={modalVisible}
                  closeModal={closeModal}
                  modalContent={<ModalScreen />}
                />
                <OrderLogo></OrderLogo>
                <Order>
                  <Text
                    style={{
                      color: theme.colors.white,
                      fontSize: theme.textVariants.trade.fontSize,
                    }}
                  >
                    {ticker}
                  </Text>
                  <Text
                    style={{
                      color: theme.colors.grayText,
                      fontSize: theme.textVariants.tradeInfo.fontSize,
                    }}
                  >
                    Volume traded: {result.v}
                  </Text>
                </Order>
                <OrderNumbers>
                  <Text
                    style={{
                      color: theme.colors.white,
                      fontSize: theme.textVariants.trade.fontSize,
                      fontWeight: '800',
                    }}
                  >
                    open: {result.o}
                  </Text>
                  <Text style={{ color: theme.colors.redPrimary }}>
                    close: {result.c}
                  </Text>
                </OrderNumbers>
              </OrderCard>
            )),
          )}
        </Pressable>
        <Line style={{ backgroundColor: theme.colors.linePrimary }} />
      </Box>
    </ScrollView>
  ) : (
    <Text>No fetched data at the moment !</Text>
  );
}
