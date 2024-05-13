import { SkPath, Skia } from '@shopify/react-native-skia';
import { scaleLinear, scaleTime, line, curveBasis } from 'd3';

import { DataPoint } from './modal.component';

interface GraphDataProps {
  max: number;
  min: number;
  curve: SkPath;
}

export const makeGraph = (data: DataPoint[]): GraphDataProps => {
  const GRAPH_HEIGHT = 160;
  const GRAPH_WIDTH = 360;
  const max = Math.max(...data.map((val) => val.value));
  const min = Math.min(...data.map((val) => val.value));
  const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);

  const x = scaleTime()
    .domain([new Date(2000, 1, 1), new Date(2000, 1, 15)])
    .range([10, GRAPH_WIDTH - 10]);

  const curvedLine = line<DataPoint>()
    .x((d) => x(new Date(d.date)))
    .y((d) => y(d.value))
    .curve(curveBasis)(data);

  const skPath = Skia.Path.MakeFromSVGString(curvedLine!);

  return {
    max,
    min,
    curve: skPath!,
  };
};
