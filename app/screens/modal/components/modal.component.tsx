import { AntDesign } from '@expo/vector-icons';
import { Canvas, Line, vec } from '@shopify/react-native-skia';
import React, { memo, useEffect } from 'react';

import { ModalContainer, ModalHeader, ModalLogo } from './modal.styles';
import {
  ModalDataProps,
  startDate,
  endDate,
} from '../../(tabs)/watchlist/watchlist';
import { Text, Box, useTheme } from '../../../Theme/theme';

interface ModalData {
  modalData: ModalDataProps;
}

interface DataPoint {
  date: Date | string;
  value: number;
}

const ModalScreen: React.FC<ModalData> = ({ modalData }) => {
  const theme = useTheme();
  const { latest, latestResult, otherResults } = modalData;
  const { results, key } = otherResults;

  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = end.getTime() - start.getTime();
  const range = Math.round(timeDiff / (1000 * 3600 * 24));

  useEffect(() => {
    if (key === latest.request_id) {
      const openValues = results.map((result) => {
        return result.o;
      });
      console.log(openValues);
      openValues.forEach((openValue) => {
        for (let i = 0; i <= range; ) {
          start.setDate(start.getDate() + 1);
          const data: DataPoint = {
            date: start.toDateString(),
            value: openValue,
          };
          console.log(data);
          return data;
        }
      });
    }
  }, []);

  return (
    <ModalContainer key={latest.request_id}>
      <AntDesign
        name="sharealt"
        size={22}
        color={theme.colors.white}
        style={{ alignSelf: 'flex-start', marginTop: 10, marginLeft: 10 }}
      />
      <ModalHeader>
        <ModalLogo></ModalLogo>
        <Text>{latest.ticker}</Text>
        <Box style={{ flexDirection: 'row', gap: 4, alignItems: 'baseline' }}>
          <Text style={{ fontSize: 38 }}>$</Text>
          <Text style={{ fontSize: 40 }}>{latestResult.c}</Text>
        </Box>
        <Box style={{ flexDirection: 'column' }}>
          <Text>open: {latestResult.o}</Text>
          <Text>volume: {latestResult.v}</Text>
        </Box>
      </ModalHeader>

      <Canvas
        style={{
          flex: 1,
          backgroundColor: 'skyblue',
          height: '50%',
          width: '100%',
        }}
      >
        <Line
          p1={vec(0, 0)}
          p2={vec(256, 256)}
          color={'red'}
          style={'stroke'}
          strokeWidth={4}
        />
      </Canvas>
    </ModalContainer>
  );
};

export default memo(ModalScreen);
