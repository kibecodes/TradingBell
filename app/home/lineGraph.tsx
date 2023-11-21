import { Canvas, Skia, SkPath, Line, vec, Path } from '@shopify/react-native-skia'
import { scaleLinear, scaleTime, line, curveBasis } from 'd3';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { originalData, DataPoint } from '../../Data';


interface GraphData {
    [x: string]: any;
    roundedMax: number,
    roundedMin: number,
    curve: SkPath
}

export const LineGraph = () => {
    const GRAPH_HEIGHT = 400;
    const GRAPH_WIDTH = 370;

    const makeGraph = (data: DataPoint[]) => {
        const max = Math.max(...data.map(val => val.value));
        const min = Math.min(...data.map(val => val.value));

        const roundedMax = Math.ceil(max/ 10) * 10;
        const roundedMin = Math.floor(min/ 10) * 10;
        const y = scaleLinear().domain([0, roundedMax]).range([GRAPH_HEIGHT, 35]);

        const displayYAxisValues = () => {
            const valueRange = roundedMax - roundedMin;
            const numOfValues = 5;
            const interval = valueRange / numOfValues;

            const yAxisValues = [];
            for(let i=0; i< numOfValues; i++) {
                const value = roundedMin + i * interval;
                const yPos = GRAPH_HEIGHT - ((value - roundedMin)/ valueRange) * GRAPH_HEIGHT;   
                
                yAxisValues.push(
                    <Text
                        key={value.toString()}
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: yPos,
                            fontSize: 12
                        }}
                    >
                        {value.toFixed(0)}
                    </Text>
                )
            }
            return yAxisValues;
        }

        const x = scaleTime()
            .domain([new Date(2000, 1, 1), new Date(2000, 1, 15)])
            .range([10, GRAPH_WIDTH - 10])


        const curvedLine = line<DataPoint>()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.value))
            .curve(curveBasis)(data);

        const skPath = Skia.Path.MakeFromSVGString(curvedLine!);

        return {
            roundedMax,
            roundedMin,
            curve: skPath!,
            displayYAxisValues,
        };
    };

    const graphData: GraphData = makeGraph(originalData);

    return (
        <View style={styles.container}>
            <Canvas
                id='lineCanvas' 
                style={{
                    width: GRAPH_WIDTH, 
                    height: GRAPH_HEIGHT,
                }}
            >
                <Line 
                    p1={vec(10,130)}
                    p2={vec(400, 130)}
                    color="grey"
                    style="stroke"
                    strokeWidth={1}
                />
                <Line 
                    p1={vec(10,250)}
                    p2={vec(400, 250)}
                    color="grey"
                    style="stroke"
                    strokeWidth={1}
                />
                <Line 
                    p1={vec(10,370)}
                    p2={vec(400, 370)}
                    color="grey"
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
            {graphData.displayYAxisValues()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
});
