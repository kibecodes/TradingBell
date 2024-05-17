import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, ScrollView } from 'react-native';

import { FetchedDataState, FetchedResult } from './service/fetch';
import { Box, Text, useTheme } from '../../Theme/theme';
import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
} from '../../home/components/populate.styles';
import ModalComponent from '../modal/[modal]';
import ModalScreen from '../modal/components/modal.component';

export interface DataProps {
  data: FetchedDataState;
  loadState: boolean;
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

const Watchlist: React.FC<DataProps> = () => {
  const route = useRoute();
  const { data, loadState } = route.params as DataProps;

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

  return loadState ? (
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
        {data.currencyPairsData.map(
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
        {data.stocksData.map(({ type, request_id, ticker, results }, index) => {
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
        })}
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
};
export default Watchlist;
