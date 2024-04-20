/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { Pressable } from 'react-native';

import { useTheme, Text } from '../../../../Theme/theme';
import {
  storage,
  saveData,
  loadData,
  STORAGE_KEY,
} from '../../../../utils/storage/asyncStorage';
import ModalComponent from '../../../modal/[modal]';
import ModalScreen from '../../../modal/modal.component';
import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
} from '../components/watchlist.styles';

interface FetchedResult {
  o: number;
  c: number;
  v: number;
}
export interface FetchedResponse {
  ticker: string;
  request_id: string;
  results: [FetchedResult];
}

export const CardComponent = () => {
  const theme = useTheme();
  const [fetchedData, setFetchedData] = useState<FetchedResponse[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

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
    } catch (error: unknown) {
      console.error('Problem fetching data:', error);
    }
    return fetchedData;
  }

  const fetchAndUpdateState = async () => {
    try {
      const storedData = await loadData();
      if (!storedData) {
        const data = await fetchData();
        await saveData(data);
        setFetchedData(data);
      } else {
        setFetchedData(storedData);
      }
    } catch (error: unknown) {
      console.log('Problem fetching and updating state:', error);
    }
  };

  const checkAsyncStorage = () => {
    try {
      const data = AsyncStorage.getItem(STORAGE_KEY);
      if (data !== null) {
        console.log('Data in AsyncStorage:', data);
      }
    } catch (error) {
      console.log('Problem looking up data in AsyncStorage:', error);
    }
  };

  useEffect(() => {
    storage
      .save({
        key: STORAGE_KEY,
        id: 'fetchedData',
        data: fetchedData,
        expires: 1000 * 3600 * 24,
      })
      .catch((error: unknown) => console.log('Problem saving data:', error));
    storage
      .load({
        key: STORAGE_KEY,
        //*specific sync updates for later*//
        // autoSync: true,
        // syncInBackground: true,
        // syncParams: {},
      })
      .then((ret: FetchedResponse[]) => {
        console.log('Data loaded from AsyncStorage:', ret);
        setFetchedData(ret);
      })
      .catch((error: unknown) => console.log('Problem loading data:', error));
    fetchAndUpdateState().catch((error: unknown) => {
      console.log('Problem rendering data from AsyncStorage:', error);
    });
    checkAsyncStorage();
  }, []);

  return (
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
  );
};
