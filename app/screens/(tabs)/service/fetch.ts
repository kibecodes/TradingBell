import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export interface FetchedResult {
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
export interface FetchedDataState {
  currencyPairsData: FetchedResponse[];
  stocksData: FetchedResponse[];
}
interface StorageTypes {
  STORE_KEY: string;
  fetchedData: FetchedDataState;
}

interface exportTypes {
  data: FetchedDataState;
  loadState: boolean;
}

export const startDate = '2024-04-22';
export const endDate = '2024-05-02';

export default function FetchService(): exportTypes {
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchedData, setFetchedData] = useState<FetchedDataState>({
    currencyPairsData: [],
    stocksData: [],
  });
  const STORE_KEY = 'fetchedData';

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

  return { data: fetchedData, loadState: loading };
}
