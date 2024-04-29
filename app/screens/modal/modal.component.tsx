import { AntDesign } from '@expo/vector-icons';
import React from 'react';

import { ModalContainer, ModalHeader, ModalLogo } from './modal.styles';
import { ModalDataProps } from '../(tabs)/watchlist/watchlist';
import { Text, Box, useTheme } from '../../Theme/theme';

interface Props {
  modalData: ModalDataProps;
}

const ModalScreen: React.FC<Props> = ({ modalData }) => {
  const theme = useTheme();
  const { response, result } = modalData;

  return (
    <ModalContainer key={response.request_id}>
      <AntDesign
        name="sharealt"
        size={26}
        color={theme.colors.white}
        style={{ alignSelf: 'flex-start' }}
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
    </ModalContainer>
  );
};

export default ModalScreen;
