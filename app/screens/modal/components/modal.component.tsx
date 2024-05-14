import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { useWindowDimensions } from 'react-native';

import { makeGraph } from './Model';
import GenerateCanvas from './graph';
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
export interface DataPoint {
  date: Date;
  value: number;
}

const ModalScreen: React.FC<ModalData> = ({ modalData }) => {
  const theme = useTheme();
  const window = useWindowDimensions();
  const GRAPH_HEIGHT = window.height;
  const GRAPH_WIDTH = window.width;
  const { latest, latestResult, otherResults, type } = modalData;
  const { results } = otherResults;

  const start = new Date(startDate);
  const end = new Date(endDate);
  const last = new Date(end.getDay() + 1);
  const graphData: DataPoint[] = [];

  if (type === 'forex') {
    const openValues = results.map((result) => {
      return result.o;
    });

    while (start <= last) {
      if (start.getDay() !== 0 && start.getDay() !== 6) {
        const openValue = openValues.shift();

        const data: DataPoint = {
          date: start,
          value: openValue!,
        };
        graphData.push(data);
      }
      start.setDate(start.getDay() + 1);
    }
  }

  const data = makeGraph(graphData);

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
      <GenerateCanvas
        data={data}
        graphHeight={GRAPH_HEIGHT}
        graphWidth={GRAPH_WIDTH}
      />
    </ModalContainer>
  );
};

export default ModalScreen;
