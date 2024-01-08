import React, { useState } from 'react';
import { Pressable, ScrollView } from 'react-native';

import { CurrencyPairLogo } from './components/currencyPairLogo';
import {
  OrderCard,
  OrderLogo,
  Order,
  OrderNumbers,
  CompanyLogo,
  PriceIndicator,
} from './watchlist.styles';
import { Box, Text, useTheme } from '../../../Theme/theme';
import { useAggregateQuery } from '../../../api/query';
import { Line } from '../../../utils/components/line.styles';
import ModalComponent from '../../modal/[modal]';
import ModalScreen from '../../modal/modal.component';


export default function Watchlist() {
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const { data } = useAggregateQuery(
    'AAPL',
    1,
    'minute',
    '2021-01-01',
    '2021-01-02' 
  );

  return (
    <ScrollView>
      <Box
        data-testID="watchlist-component"
        style={{
          paddingHorizontal: 10,
          backgroundColor: theme.colors.mainBackground,
          flex: 1,
          paddingBottom: 20,
        }}>
        <Pressable onPress={openModal}>
          <OrderCard style={{ backgroundColor: theme.colors.mainForeground }}>
            <ModalComponent
              isVisible={modalVisible}
              closeModal={closeModal}
              modalContent={<ModalScreen />}
            />
            <OrderLogo>
              <CurrencyPairLogo
                logoSource={{
                  uri: 'https://s3-alpha-sig.figma.com/img/c18c/b456/64d41644334580c86d73fb53476d19de?Expires=1698624000&Signature=cou~7FWRMICx1TnD8QrC6YE-w4T-hQ0I7Avv-hJk~D9kq0j52-tkUglJ33mjBVlMfW~Gabbc0TBBQknJX4sNDgYRjP8fciJKaLQ674JCEhgXhsNGL0OMAr1UOsYz71RDZ8tJ1LZycoa3-l92H8gX521BgNjKuxNsd1zxGh1Ue1NaVPDPnc-XVFwRNLjcXwsr6Wrk4XBLtYdIMBL42UZgcXTBDfBxDDnbfPbpmW53~lTMkRdCGx1EeVAEoNkmj11ahxw~kc3b3ApHsWvTf1MFpeoMSzs3coxEU9QLmy-zrT0unOwDBdcjVfp4o-6gY8SeiFByqnPYIYLOGWAqCfTmQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                }}
                overlaySource={{
                  uri: 'https://s3-alpha-sig.figma.com/img/79f4/10d9/1c627386e08a3bcd6b6bd064204cb50d?Expires=1698624000&Signature=APfQp6MQ6i6rIR6N~hvgkLkW5U3Y-qVoiJj-EPGhvZ-FJEC0tYNdUoL6Sk04ubwuS0H-BFcHuGPpfgNcU5FNASvD5uUbMsDbbM7dLhgf9J9lAKgJYu314D4gCsQhVgG~0SZfar2v5s7K7sw5IsIInLhje3uJ3NKEnIr-t~XoLlHXCfUc5Q~MJD6fUeYPWHW6ssY74Sjtmf1xM2~U0kewNwvE0A-kRmwFq3wRZxYZs3CO241OjqOnyePXN8PoDovpwMa1EFA5obzbwTQrVPQ7IdAE3g5O7HQ4cHD1zUdjy7vpZZM2K1hEP0J1vp6W1uGG6NKRYj3Npg0bqjhnO1ua~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                }}
              />
            </OrderLogo>
            <Order>
              <Text
                style={{
                  color: theme.colors.white,
                  fontSize: theme.textVariants.trade.fontSize,
                }}>
                {data.stocksTicker}
              </Text>
              <Text
                style={{
                  color: theme.colors.grayText,
                  fontSize: theme.textVariants.tradeInfo.fontSize,
                }}>
                {}
              </Text>
            </Order>
            <OrderNumbers>
              <Text
                style={{
                  color: theme.colors.white,
                  fontSize: theme.textVariants.trade.fontSize,
                  fontWeight: '800'
                }}>
                {data.timespan}
              </Text>
              <Text style={{ color: theme.colors.redPrimary }}>
                -0.0037 (-0.3440%)
              </Text>
            </OrderNumbers>
          </OrderCard>
        </Pressable>
        <Line style={{ backgroundColor: theme.colors.linePrimary }} />
        
      </Box>
    </ScrollView>
  );
}
