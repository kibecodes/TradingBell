import { Canvas, Skia, SkPath, Line, vec, Path } from '@shopify/react-native-skia'
import { scaleLinear, scaleTime, line, curveBasis } from 'd3';
import React from 'react';

import { originalData, animatedData, DataPoint } from '../../Data';


interface GraphData {
    max: number,
    min: number,
    curve: SkPath
}

const LineGraph = () => {
    const GRAPH_HEIGHT = 400;
    const GRAPH_WIDTH = 370;

    const makeGraph = (data: DataPoint[]) => {
        const max = Math.max(...data.map(val => val.value));
        const min = Math.min(...data.map(val => val.value));
        const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);

        const x = scaleTime()
            .domain([new Date(2000, 1, 1), new Date(2000, 15)])
            .range([10, GRAPH_WIDTH - 10])


        const curvedLine = line<DataPoint>()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.value))
            .curve(curveBasis)(data);

        const skPath = Skia.Path.MakeFromSVGString(curvedLine!);

        return {
            max,
            min,
            curve: skPath!,
        };
    };

    const graphData = makeGraph(originalData);
    <Canvas
        style={{
            width: GRAPH_WIDTH, 
            height: GRAPH_HEIGHT
        }}
    >
        <Line 
            p1={vec(10,130)}
            p2={vec(400, 130)}
            color={"lightgrey"}
            style="stroke"
            strokeWidth={1}
        />
        <Line 
            p1={vec(10,250)}
            p2={vec(400, 250)}
            color={"lightgrey"}
            style="stroke"
            strokeWidth={1}
        />
        <Line 
            p1={vec(10,370)}
            p2={vec(400, 250)}
            color={"lightgrey"}
            style="stroke"
            strokeWidth={1}
        />
        <Path
            style="stroke"
            path={graphData.curve}
            strokeWidth={4}
            color="#6231ff"
        />
    </Canvas>

        

}