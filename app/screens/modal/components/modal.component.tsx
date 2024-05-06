import { AntDesign } from '@expo/vector-icons';
import { Canvas, Line, vec } from '@shopify/react-native-skia';
import React, { useEffect } from 'react';

import { ModalContainer, ModalHeader, ModalLogo } from './modal.styles';
import { ModalDataProps } from '../../(tabs)/watchlist/watchlist';
import { Text, Box, useTheme } from '../../../Theme/theme';

interface ModalData {
  modalData: ModalDataProps;
}

const ModalScreen: React.FC<ModalData> = ({ modalData }) => {
  const theme = useTheme();
  const { latest, latestResult, otherResults } = modalData;
  const { results, key } = otherResults;

  useEffect(() => {
    if (key === latest.request_id) {
      const openValues = results.map((result) => result.o);
      console.log(openValues);
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

export default ModalScreen;
