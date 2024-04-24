import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView } from 'react-native';

import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
} from './components/watchlist.styles';
import { Box, Text, useTheme } from '../../../Theme/theme';
// import { Line } from '../../../utils/components/line.styles';
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

interface FetchedDataState {
  currencyPairsData: FetchedResponse[];
  stocksData: FetchedResponse[];
  cryptosData: FetchedResponse[];
}

interface StorageTypes {
  STORE_KEY: string;
  fetchedData: FetchedDataState[];
}

export default function Watchlist() {
  const [fetchedData, setFetchedData] = useState<FetchedDataState>({
    currencyPairsData: [],
    stocksData: [],
    cryptosData: [],
  });
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
    await AsyncStorage.setItem(STORE_KEY, serializedData);
  }

  async function load() {
    const loadedData = await AsyncStorage.getItem(STORE_KEY);

    if (
      fetchedData.currencyPairsData.length === 0 ||
      fetchedData.stocksData.length === 0 ||
      fetchedData.cryptosData.length === 0 ||
      typeof loadedData !== 'string'
    ) {
      await fetchData()
        .then((data) => {
          setFetchedData(data);
          return data;
        })
        .then((data) => save({ STORE_KEY, fetchedData: [data] }))
        .catch((error) => console.log(error));
    } else if (
      typeof loadedData == 'string' &&
      fetchedData.currencyPairsData.length > 0 &&
      fetchedData.stocksData.length > 0 &&
      fetchedData.cryptosData.length > 0
    ) {
      const parsedData: FetchedDataState = JSON.parse(loadedData);
      setFetchedData(parsedData);
    }
  }

  async function fetchData(): Promise<{
    currencyPairsData: FetchedResponse[];
    stocksData: FetchedResponse[];
    cryptosData: FetchedResponse[];
  }> {
    const currencyPairs = ['EURUSD', 'USDJPY', 'GBPUSD', 'AUDUSD', 'USDCAD'];
    const stocks = ['MSFT', 'AAPL', 'NVDA', 'AMZN', 'META'];
    const cryptos = ['USDT', 'BTC', 'ETH', 'FDUSD', 'USDC'];
    const apiBaseUrl = 'https://api.polygon.io';
    try {
      const [currencyPairsData, stocksData] = await Promise.all([
        Promise.all(
          currencyPairs.map(async (currencyPair) => {
            const response = await fetch(
              `${apiBaseUrl}/v2/aggs/ticker/C:${currencyPair}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
            );
            const data: FetchedResponse = await response.json();
            return data;
          }),
        ),
        Promise.all(
          stocks.map(async (stock) => {
            const response = await fetch(
              `${apiBaseUrl}/v2/aggs/ticker/${stock}/range/1/day/2023-01-09/2023-01-09?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
            );
            const data: FetchedResponse = await response.json();
            return data;
          }),
        ),
      ]);

      // await new Promise((resolve) => setTimeout(resolve, 60000));
      const cryptosData = await Promise.all(
        cryptos.map(async (crypto) => {
          const response = await fetch(
            `${apiBaseUrl}/v2/aggs/ticker/${crypto}/range/1/day/2023-01-09/2023-01-09?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
          );
          const data: FetchedResponse = await response.json();
          return data;
        }),
      );
      console.log('crypto:', cryptosData);
      return { currencyPairsData, stocksData, cryptosData };
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
          alignItems: 'flex-start',
        }}
      >
        <Text>Forex</Text>
        <Pressable onPress={openModal}>
          {fetchedData.currencyPairsData.map(
            ({ request_id, ticker, results }) =>
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
        <Text>Stocks</Text>
        <Pressable onPress={openModal}>
          {fetchedData.stocksData.map(({ request_id, ticker, results }) =>
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
        <Text>Crypto</Text>
        <Pressable onPress={openModal}>
          {fetchedData.cryptosData.map(({ request_id, ticker, results }) =>
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
        {/* <Line style={{ backgroundColor: theme.colors.linePrimary }} /> */}
      </Box>
    </ScrollView>
  );
}
