import { SkPath, Skia } from '@shopify/react-native-skia';
import { scaleLinear, scaleTime, line, curveBasis } from 'd3';

import { DataPoint } from './modal.component';

export interface GraphDataProps {
  max: number;
  min: number;
  curve: SkPath | null;
}

export const makeGraph = (data: DataPoint[]): GraphDataProps => {
  const GRAPH_HEIGHT = 160;
  const GRAPH_WIDTH = 360;
  const max = Math.max(...data.map((val) => val.value));
  const min = Math.min(...data.map((val) => val.value));
  const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);

  const x = scaleTime()
    .domain([new Date(2024, 4, 22), new Date(2024, 5, 3)])
    .range([10, GRAPH_WIDTH - 10]);

  const curvedLine = line<DataPoint>()
    .x((d) => x(new Date(d.date)))
    .y((d) => y(d.value))
    .curve(curveBasis)(data);

  if (curvedLine) {
    const skPath = Skia.Path.MakeFromSVGString(curvedLine);

    if (skPath) {
      return {
        max,
        min,
        curve: skPath,
      };
    }
    return {
      max,
      min,
      curve: skPath,
    };
  } else {
    return {
      max,
      min,
      curve: null,
    };
  }
};
