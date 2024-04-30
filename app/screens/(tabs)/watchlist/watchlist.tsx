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
import ModalScreen from '../../modal/components/modal.component';

interface FetchedResult {
  o: number;
  c: number;
  v: number;
}
export interface FetchedResponse {
  ticker: string;
  request_id: string;
  results: FetchedResult[];
}

interface FetchedDataState {
  currencyPairsData: FetchedResponse[];
  stocksData: FetchedResponse[];
}

interface StorageTypes {
  STORE_KEY: string;
  fetchedData: FetchedDataState[];
}

export interface ModalDataProps {
  response: {
    request_id: string;
    ticker: string;
    allResults: {
      results: FetchedResult[];
      index: number;
    };
  };
  result: FetchedResult;
}

export const endDate = '2024-04-26';

export default function Watchlist() {
  const [fetchedData, setFetchedData] = useState<FetchedDataState>({
    currencyPairsData: [],
    stocksData: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<ModalDataProps | undefined>();
  const theme = useTheme();
  const STORE_KEY = 'fetchedData';

  const openModal = (data: ModalDataProps) => {
    setModalVisible(true);
    setModalData(data);
  };
  const closeModal = () => {
    setModalVisible(false);
    // setModalData(null);
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
      fetchedData.stocksData.length > 0
    ) {
      const parsedData: FetchedDataState = JSON.parse(loadedData);
      setFetchedData(parsedData);
    }
  }

  async function fetchData(): Promise<{
    currencyPairsData: FetchedResponse[];
    stocksData: FetchedResponse[];
  }> {
    const currencyPairs = ['EURUSD', 'USDJPY', 'GBPUSD', 'AUDUSD', 'USDCAD'];
    const stocks = ['MSFT', 'AAPL', 'NVDA', 'AMZN', 'META'];
    const apiBaseUrl = 'https://api.polygon.io';
    const startDate = '2024-04-22';

    try {
      const fetchedData = await Promise.all([
        Promise.all(
          currencyPairs.map(async (currencyPair) => {
            const response = await fetch(
              `${apiBaseUrl}/v2/aggs/ticker/C:${currencyPair}/range/1/day/${startDate}/${endDate}?adjusted=true&sort=asc&limit=120&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
            );
            const data: FetchedResponse = await response.json();
            return data;
          }),
        ),
        Promise.all(
          stocks.map(async (stock) => {
            const response = await fetch(
              `${apiBaseUrl}/v2/aggs/ticker/${stock}/range/1/day/${startDate}/${endDate}?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
            );
            const data: FetchedResponse = await response.json();
            return data;
          }),
        ),
      ]);

      const [currencyPairsData, stocksData] = fetchedData;
      return { currencyPairsData, stocksData };
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

        {fetchedData.currencyPairsData.map(
          ({ request_id, ticker, results }, index) => {
            const lastResult = results[results.length - 1];
            if (lastResult) {
              return (
                <Pressable
                  key={`${request_id}-${index}`}
                  onPress={() =>
                    openModal({
                      result: lastResult,
                      response: {
                        request_id,
                        ticker,
                        allResults: {
                          results,
                          index,
                        },
                      },
                    })
                  }
                >
                  <OrderCard
                    key={request_id}
                    style={{ backgroundColor: theme.colors.mainForeground }}
                  >
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
                        Volume traded: {lastResult.v}
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
                        open: {lastResult.o}
                      </Text>
                      <Text style={{ color: theme.colors.redPrimary }}>
                        close: {lastResult.c}
                      </Text>
                    </OrderNumbers>
                    {modalVisible && (
                      <ModalComponent
                        isVisible={modalVisible}
                        closeModal={closeModal}
                        index={request_id}
                        modalContent={
                          modalData && <ModalScreen modalData={modalData} />
                        }
                      />
                    )}
                  </OrderCard>
                </Pressable>
              );
            }
          },
        )}

        <Text>Stocks</Text>

        {fetchedData.stocksData.map(
          ({ request_id, ticker, results }, index) => {
            const lastResult = results[results.length - 1];
            if (lastResult) {
              return (
                <Pressable
                  key={`${request_id}-${index}`}
                  onPress={() =>
                    openModal({
                      result: lastResult,
                      response: {
                        request_id,
                        ticker,
                        allResults: {
                          results,
                          index,
                        },
                      },
                    })
                  }
                >
                  <OrderCard
                    key={request_id}
                    style={{ backgroundColor: theme.colors.mainForeground }}
                  >
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
                        Volume traded: {lastResult.v}
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
                        open: {lastResult.o}
                      </Text>
                      <Text style={{ color: theme.colors.redPrimary }}>
                        close: {lastResult.c}
                      </Text>
                    </OrderNumbers>
                    {modalVisible && (
                      <ModalComponent
                        isVisible={modalVisible}
                        closeModal={closeModal}
                        index={request_id}
                        modalContent={
                          modalData && <ModalScreen modalData={modalData} />
                        }
                      />
                    )}
                  </OrderCard>
                </Pressable>
              );
            }
          },
        )}
        {/* <Line style={{ backgroundColor: theme.colors.linePrimary }} /> */}
      </Box>
    </ScrollView>
  );
}
