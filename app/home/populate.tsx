import { Feather, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StatusBar, Platform, TextInput } from 'react-native';

import { PopulateCard } from './components/populate.card';
import { Box, useTheme } from '../Theme/theme';

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
export interface FetchedDataState {
  currencyPairsData: FetchedResponse[];
  stocksData: FetchedResponse[];
  crytposData: FetchedResponse[];
}

//** loading animation to delay fetch for 60sec */

export default function Populate() {
  const [fetchedData, setFetchedData] = useState<FetchedDataState>({
    currencyPairsData: [],
    stocksData: [],
    crytposData: [],
  });
  const router = useRouter();
  const [text, setText] = useState('');
  const theme = useTheme();

  const onChangeText = (inputText: string) => {
    setText(inputText.toUpperCase());
  };

  const handleSubmit = () => {
    console.log('Submitted text:', text);
    setText('');
  };

  const defaults = [
    { currencyPairs: ['EURUSD', 'USDJPY', 'GBPUSD', 'AUDUSD', 'USDCAD'] },
    { stocks: ['MSFT', 'AAPL', 'NVDA', 'AMZN', 'META'] },
    { cryptos: ['USDT', 'BTC', 'ETC', 'USDC', 'XRP'] },
  ];

  const apiBaseUrl = 'https://api.polygon.io';

  const fetchData = async () => {
    try {
      const fetchedData: FetchedDataState = {
        currencyPairsData: [],
        stocksData: [],
        crytposData: [],
      };
      await Promise.all(
        defaults.map(async (item) => {
          if (item.currencyPairs) {
            const promises = item.currencyPairs.map(async (currencyPair) => {
              const response = await fetch(
                `${apiBaseUrl}/v2/aggs/ticker/C:${currencyPair}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
              );
              const data = response.json();
              return data;
            });
            fetchedData.currencyPairsData = await Promise.all(promises);
          }
          if (item.stocks) {
            const promises = item.stocks.map(async (stock) => {
              const response = await fetch(
                `${apiBaseUrl}/v2/aggs/ticker/${stock}/range/1/day/2023-01-09/2023-01-09?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
              );
              const data = response.json();
              return data;
            });
            fetchedData.stocksData = await Promise.all(promises);
          }
          if (item.cryptos) {
            const promises = item.cryptos.map(async (crypto) => {
              const response = await fetch(
                `${apiBaseUrl}/v2/aggs/ticker/${crypto}/range/1/day/2023-01-09/2023-01-09?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
              );
              const data = response.json();
              return data;
            });
            fetchedData.crytposData = await Promise.all(promises);
          }
        }),
      );
      setFetchedData(fetchedData);
      return fetchedData;
    } catch (error) {
      console.log('Problem:', error);
    }
  };

  useEffect(() => {
    fetchData().catch((error) => console.log('Problem fetching:', error));
  }, []);

  return (
    <>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginStart: 10,
          marginEnd: 10,
          alignItems: 'center',
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          // backgroundColor: 'red',
        }}
      >
        <AntDesign
          name="arrowleft"
          size={22}
          color="black"
          onPress={router.back}
        />
        <TextInput
          style={{
            width: '80%',
            height: 60,
            textAlign: 'left',
            fontSize: 20,
            fontWeight: '600',
          }}
          onChangeText={onChangeText}
          onSubmitEditing={handleSubmit}
          value={text}
          placeholder="Search"
        />
        <Feather name="sliders" size={22} color="black" />
      </Box>
      <Box
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: theme.colors.mainBackground,
          // backgroundColor: 'skyblue',
        }}
      >
        {fetchedData && <PopulateCard fetchedData={fetchedData} />}
        <ExpoStatusBar style="auto" />
      </Box>
    </>
  );
}
