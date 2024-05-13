import { AntDesign } from '@expo/vector-icons';
import { Canvas, Path } from '@shopify/react-native-skia';
import React from 'react';
import { useWindowDimensions } from 'react-native';

import { makeGraph } from './Model';
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
  const window = useWindowDimensions();
  const GRAPH_HEIGHT = window.height;
  const GRAPH_WIDTH = window.width;
  const theme = useTheme();
  const { latest, latestResult, otherResults, type } = modalData;
  const { results, key } = otherResults;

  const generateGraphData = () => {
    if (key === latest.request_id && type === 'forex') {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const last = new Date(end.getDay() + 1);
      const graphData = [];

      const openValues = results.map((result) => {
        return result.o;
      });

      while (start <= last) {
        if (start.getDay() !== 0 && start.getDay() !== 6) {
          const openValue = openValues.shift();

          const data: DataPoint = {
            date: start,
            value: openValue ?? 0,
          };
          graphData.push(data);
        }
        start.setDate(start.getDay() + 1);
      }
      const data = makeGraph(graphData);
      return (
        <Canvas style={{ height: GRAPH_HEIGHT, width: GRAPH_WIDTH }}>
          <Path style={'stroke'} path={data.curve} />
        </Canvas>
      );
    }
    return <Text>Nothing !!</Text>;
  };

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
      {generateGraphData()}
    </ModalContainer>
  );
};

export default ModalScreen;
