import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { Pressable, ScrollView } from 'react-native';

import { Box, Text, useTheme } from '../../../Theme/theme';
import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
} from '../../../home/components/populate.styles';
import ModalComponent from '../../modal/[modal]';
import ModalScreen from '../../modal/components/modal.component';

interface FetchedResult {
  o: number;
  c: number;
  v: number;
}
interface FetchedResponse {
  type: string;
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
  fetchedData: FetchedDataState;
}
export interface ModalDataProps {
  latestResult: FetchedResult;
  latest: {
    request_id: string;
    ticker: string;
  };
  otherResults: {
    results: FetchedResult[];
    key: string;
  };
  type: string;
}

export const startDate = '2024-04-22';
export const endDate = '2024-05-02';

export default function Watchlist() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchedData, setFetchedData] = useState<FetchedDataState>({
    currencyPairsData: [],
    stocksData: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<ModalDataProps>({
    latestResult: {
      o: 0,
      c: 0,
      v: 0,
    },
    latest: {
      request_id: '',
      ticker: '',
    },
    otherResults: {
      results: [],
      key: '',
    },
    type: '',
  });
  const theme = useTheme();
  const STORE_KEY = 'fetchedData';

  const openModal = (data: ModalDataProps, id: string) => {
    setModalVisible(true);
    if (data.latest.request_id === id) {
      setModalData(data);
    }
    return null;
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
      typeof loadedData !== 'string'
    ) {
      await fetchData()
        .then((data) => {
          setFetchedData(data);
        })
        .catch((error) => console.log(error));
    } else if (
      typeof loadedData == 'string' &&
      fetchedData.currencyPairsData.length > 0 &&
      fetchedData.stocksData.length > 0
    ) {
      const parsedData: FetchedDataState = JSON.parse(loadedData);
      setFetchedData(parsedData);
      setLoading(false);
    }
  }

  async function fetchData(): Promise<{
    currencyPairsData: FetchedResponse[];
    stocksData: FetchedResponse[];
  }> {
    const currencyPairs = ['EURUSD', 'USDJPY', 'GBPUSD', 'AUDUSD', 'USDCAD'];
    const stocks = ['MSFT', 'AAPL', 'NVDA', 'AMZN', 'META'];
    const apiBaseUrl = 'https://api.polygon.io';

    try {
      const fetchedData = await Promise.all([
        Promise.all(
          currencyPairs.map(async (currencyPair) => {
            const response = await fetch(
              `${apiBaseUrl}/v2/aggs/ticker/C:${currencyPair}/range/1/day/${startDate}/${endDate}?adjusted=true&sort=asc&limit=120&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
            );
            const data: FetchedResponse = await response.json();
            return { ...data, type: 'forex' };
          }),
        ),
        Promise.all(
          stocks.map(async (stock) => {
            const response = await fetch(
              `${apiBaseUrl}/v2/aggs/ticker/${stock}/range/1/day/${startDate}/${endDate}?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
            );
            const data: FetchedResponse = await response.json();
            return { ...data, type: 'stock' };
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

  useEffect(() => {
    if (!loading) {
      save({ STORE_KEY, fetchedData }).catch((error) =>
        console.log('error saving:', error),
      );
    }
  }, [fetchedData, loading]);

  return loading ? (
    <ScrollView>
      <Box
        data-testID="watchlist-component"
        style={{
          backgroundColor: theme.colors.mainBackground,
          flex: 1,
          paddingBottom: 10,
          alignItems: 'flex-start',
        }}
      >
        <Text>Forex</Text>
        {fetchedData.currencyPairsData.map(
          ({ type, request_id, ticker, results }, index) => {
            const lastResult = results[results.length - 1];
            if (lastResult) {
              return (
                <Pressable
                  key={`${request_id}-${index}`}
                  onPress={() =>
                    openModal(
                      {
                        latestResult: lastResult,
                        latest: {
                          request_id,
                          ticker,
                        },
                        otherResults: {
                          results,
                          key: request_id,
                        },
                        type,
                      },
                      request_id,
                    )
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
                        Volume: {lastResult.v}
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
                  </OrderCard>
                </Pressable>
              );
            }
          },
        )}
        <Text>Stocks</Text>
        {fetchedData.stocksData.map(
          ({ type, request_id, ticker, results }, index) => {
            const lastResult = results[results.length - 1];
            if (lastResult) {
              return (
                <Pressable
                  key={`${request_id}-${index}`}
                  onPress={() =>
                    openModal(
                      {
                        latestResult: lastResult,
                        latest: {
                          request_id,
                          ticker,
                        },
                        otherResults: {
                          results,
                          key: request_id,
                        },
                        type,
                      },
                      request_id,
                    )
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
                        Volume: {lastResult.v}
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
                  </OrderCard>
                </Pressable>
              );
            }
          },
        )}
        {modalVisible && (
          <ModalComponent
            isVisible={modalVisible}
            closeModal={closeModal}
            modalContent={modalData && <ModalScreen modalData={modalData} />}
          />
        )}
      </Box>
    </ScrollView>
  ) : (
    <Text>Loading ...</Text>
  );
}
