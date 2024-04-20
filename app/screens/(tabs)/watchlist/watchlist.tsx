import * as SecureStore from 'expo-secure-store';
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

interface StorageTypes {
  STORE_KEY: string;
  fetchedData: FetchedResponse[];
}

export default function Watchlist() {
  const [fetchedData, setFetchedData] = useState<FetchedResponse[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();
  const STORE_KEY = 'fetchedData';

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  async function save({ STORE_KEY, fetchedData }: StorageTypes) {
    const serializedData = JSON.stringify(fetchedData);
    await SecureStore.setItemAsync(STORE_KEY, serializedData);
  }

  async function load() {
    const loadedData = await SecureStore.getItemAsync(STORE_KEY);

    if (fetchedData.length === 0 || typeof loadedData !== 'string') {
      await fetchData()
        .then((data) => {
          setFetchedData(data);
          return data;
        })
        .then((data) => save({ STORE_KEY, fetchedData: data }))
        .catch((error) => console.log(error));
    } else if (typeof loadedData == 'string' && fetchedData.length > 0) {
      const parsedData: FetchedResponse[] = JSON.parse(loadedData);
      setFetchedData(parsedData);
    }
  }

  async function fetchData(): Promise<FetchedResponse[]> {
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
      return fetchedData;
    } catch (error: unknown) {
      console.error('Error fetching data:', error);
    }
    return fetchedData;
  }

  async function checkForStoredData() {
    await load().catch(() => {
      throw new Error('Houston, we have a problem !');
    });
  }

  useEffect(() => {
    checkForStoredData().catch((error) => {
      console.log('Error displaying fetched data:', error);
    });
  }, []);

  return (
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
  );
}
