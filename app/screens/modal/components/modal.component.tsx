import { AntDesign } from '@expo/vector-icons';
import { Canvas, Line, vec } from '@shopify/react-native-skia';
import React from 'react';

import { ModalContainer, ModalHeader, ModalLogo } from './modal.styles';
import { ModalDataProps } from '../../(tabs)/watchlist/watchlist';
import { Text, Box, useTheme } from '../../../Theme/theme';

interface ModalData {
  modalData: ModalDataProps;
}

const ModalScreen: React.FC<ModalData> = ({ modalData }) => {
  const theme = useTheme();
  const { response, result } = modalData;
  const { allResults } = response;
  console.log(allResults);

  return (
    <ModalContainer key={response.request_id}>
      <AntDesign
        name="sharealt"
        size={22}
        color={theme.colors.white}
        style={{ alignSelf: 'flex-start', marginTop: 10, marginLeft: 10 }}
      />
      <ModalHeader>
        <ModalLogo></ModalLogo>
        <Text>{response.ticker}</Text>
        <Box style={{ flexDirection: 'row', gap: 4, alignItems: 'baseline' }}>
          <Text style={{ fontSize: 38 }}>$</Text>
          <Text style={{ fontSize: 40 }}>{result.c}</Text>
        </Box>
        <Box style={{ flexDirection: 'column' }}>
          <Text>open: {result.o}</Text>
          <Text>volume: {result.v}</Text>
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
