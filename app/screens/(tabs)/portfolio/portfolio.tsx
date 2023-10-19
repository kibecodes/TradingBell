import React from 'react';
import { View, Text } from 'react-native';

import { StockLogo } from './components/companyLogo';
import { CurrencyPairLogo } from './components/currencyPairLogo';
import { OrderCard, OrderLogo, Order, OrderNumbers } from './portfolio.styles';

export default function Portfolio() {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        backgroundColor: '#0E1629',
        flex: 1,
      }}>
      <OrderCard>
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
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            EURUSD
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>
            Euro/ U.S. Dollar
          </Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            1.0749
          </Text>
          <Text style={{ color: '#d7384d' }}>-0.0037 (-0.3440%)</Text>
        </OrderNumbers>
      </OrderCard>

      <OrderCard>
        <OrderLogo>
          <StockLogo
            logoSource={{
              uri: 'https://s3-alpha-sig.figma.com/img/7c59/a55f/f782f9ef06770c27b59527baa771d0c6?Expires=1698624000&Signature=Y7zYnsyLMBCMDrNJ~d2z-wdFL5lMq4iLoyfReXi-42TaZs9Ilc4RwIGtzuRYaXoVzPcQg3lKUpf-aC1kPE8B192iss7KKeXZtqjqYBPsCb3GAn8o-s0NdVowUUXMl~LsBr48x4z8s7wW0NoEkrjaefzm~WuWs2Da7p-n3jp0vlUaxRKeY92ZzP~Cojm1hS-ltzoX6G7eb9MUCbBJvoitdjzJiOpjpskI4ViL~geWkmHsJ-zcekVZoUgt5XzlOA~2kBRoVlM93H7ho7sCZG~7sACAgDUGNVR2rtcRzABnlCx8h7BQ8ayygpq~0nKwwNl3PfXtCCfwpWFIFD3vCbuSaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
          />
        </OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            Tesla
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>Tesla, Inc.</Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            244.40
          </Text>
          <Text style={{ color: '#22B496' }}>+9.54 (4.06%)</Text>
        </OrderNumbers>
      </OrderCard>
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            USDJPY
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>
            U.S. Dollar/Japanese Yen
          </Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            139.3550
          </Text>
          <Text style={{ color: '#d7384d' }}>-0.80 (-0.37%)</Text>
        </OrderNumbers>
      </OrderCard>
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            Boe
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>Boeing Co</Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            217.31
          </Text>
          <Text style={{ color: '#d7384d' }}>-0.00759 (-0.77%)</Text>
        </OrderNumbers>
      </OrderCard>
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            Crude Oil
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>Crude Oil</Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            70.35
          </Text>
          <Text style={{ color: '#d7384d' }}>-0.94 (-1.32%)</Text>
        </OrderNumbers>
      </OrderCard>
      <OrderCard>
        <OrderLogo></OrderLogo>
        <Order>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            AUDUSD
          </Text>
          <Text style={{ color: '#AAB3BB', fontSize: 16 }}>
            Aussie /U.S. Dollar
          </Text>
        </Order>
        <OrderNumbers>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
            217.31
          </Text>
          <Text style={{ color: '#22B496' }}>+0.0025 (+0.3661%)</Text>
        </OrderNumbers>
      </OrderCard>
    </View>
  );
}