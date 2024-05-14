import { Canvas, Line, Path, vec } from '@shopify/react-native-skia';
import React from 'react';

import { GraphDataProps } from './Model';

interface Props {
  data: GraphDataProps;
  graphHeight: number;
  graphWidth: number;
}

const GenerateCanvas: React.FC<Props> = ({ data, graphHeight, graphWidth }) => {
  return data.curve ? (
    <Canvas style={{ height: graphHeight, width: graphWidth }}>
      <Path style={'stroke'} path={data.curve} />
    </Canvas>
  ) : (
    <Canvas style={{ height: graphHeight, width: graphWidth }}>
      <Line style={'stroke'} p1={vec(0, 0)} p2={vec(0, 256)} />
    </Canvas>
  );
};

export default GenerateCanvas;
