import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'react-native-storage';

import { FetchedResponse } from '../../screens/(tabs)/watchlist/components/fetch.component';

export const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

export const STORAGE_KEY = 'fetchedData';

export const saveData = async (data: FetchedResponse[]) => {
  try {
    const serializedData = JSON.stringify(data);
    await AsyncStorage.setItem(STORAGE_KEY, serializedData);
  } catch (error) {
    console.log('Problem saving data to AsyncStorage:', error);
    throw error;
  }
};

export const loadData = async () => {
  try {
    const serializedData = await AsyncStorage.getItem(STORAGE_KEY);
    if (serializedData !== null) {
      const parsedData: FetchedResponse[] = JSON.parse(serializedData);
      return parsedData;
    } else {
      console.log('No stored data');
    }
  } catch (error: unknown) {
    console.log('Problem loading data from AsyncStorage:', error);
    throw error;
  }
};
