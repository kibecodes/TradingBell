import { Canvas, Skia, SkPath, Line, vec, Path, useValue, runTiming, Easing, useComputedValue, point } from '@shopify/react-native-skia'
import { scaleLinear, scaleTime, line, curveBasis } from 'd3';
import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

import { originalData, animatedData, DataPoint } from '../../Data';


interface GraphData {
    [x: string]: any;
    // [x: string]: any;
    max: number,
    min: number,
    curve: SkPath
}

export const LineGraph = () => {
    const transition = useValue(1);
    const state = useValue({
        current: 0,
        next: 1,
    });

    const GRAPH_HEIGHT = 400;
    const GRAPH_WIDTH = 370;

    const makeGraph = (data: DataPoint[]) => {
        const max = Math.max(...data.map(val => val.value));
        const min = Math.min(...data.map(val => val.value));
        const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);

        function displayYAxisValues(data: DataPoint[]) {
            const canvas = document.getElementById('lineCanvas') as HTMLCanvasElement;
            data.forEach(point => {
                if(point.value >= min && point.value <= max) {
                    const yPos = y(point.value);
                    const context = canvas.getContext('2d');
                    context!.fillText(point.value.toString(), 10, yPos);
                }
            })
        }
        // function displayYAxisValues(data: DataPoint[]) {
        //     const canvas = document.getElementById('lineCanvas') as HTMLCanvasElement;
        //     const numOfValues = 5;
        //     const interval = (max - min) / (numOfValues - 1);
        //     const filteredData = data.filter(point => point.value >= min && point.value <= max);

        //     const yPosArray = filteredData.map(point => {
        //         return GRAPH_HEIGHT - ((point.value - min) / (max - min)) * GRAPH_HEIGHT;
        //     });
        //     yPosArray.forEach((yPos, index) => {
        //         const isSpaced = index % Math.round(filteredData.length / numOfValues) === 0;
        //         const valueAtPosition = min + index * interval;

        //         if(isSpaced) {
        //             const context = canvas.getContext('2d');
        //             context!.fillText(valueAtPosition.toString(), 20, yPos);
        //         }
        //     });
        // }

        const x = scaleTime()
            .domain([new Date(2000, 1, 1), new Date(2000, 1, 15)])
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
            displayYAxisValues: () => {
                return data
                    .filter(point => point.value >= min && point.value <= max)
                    .map(point => (
                        <Text
                            key={point.date.toString()}
                            style={{
                                position: 'absolute',
                                left: 10,  
                                top: y(point.value),
                                fontSize: 12,
                            }}
                        >
                            {point.value.toString()}
                        </Text>
                    ))
            }
        };

    };
    
    const transitionStart = (end: number) => {
        state.current = {
            current: end,
            next: state.current.current,
        };
        transition.current = 0;
        runTiming(transition, 1, {
            duration: 750,
            easing: Easing.inOut(Easing.cubic),
        });
    };

    const graphData: GraphData[] = [makeGraph(originalData), makeGraph(animatedData)];

    const path = useComputedValue(() => {
        const start = graphData[state.current.current].curve;
        const end = graphData[state.current.next].curve;
        const result = start.interpolate(end, transition.current); 
        return result?.toSVGString() ?? '0';
    }, [state, transition])

    return (
        <View style={styles.container}>
            <Canvas
                id='lineCanvas' 
                style={{
                    width: GRAPH_WIDTH, 
                    height: GRAPH_HEIGHT
                }}
            >
                <Line 
                    p1={vec(10,130)}
                    p2={vec(400, 130)}
                    color="lightgrey"
                    style="stroke"
                    strokeWidth={1}
                />
                <Line 
                    p1={vec(10,250)}
                    p2={vec(400, 250)}
                    color="lightgrey"
                    style="stroke"
                    strokeWidth={1}
                />
                <Line 
                    p1={vec(10,370)}
                    p2={vec(400, 370)}
                    color="lightgrey"
                    style="stroke"
                    strokeWidth={1}
                />
                <Path
                    style="stroke"
                    path={path}
                    strokeWidth={4}
                    color="#6231ff"
                />
            </Canvas>
            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={() => transitionStart(0)}
                    style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Graph 1</Text>
                </Pressable>
                <Pressable
                    onPress={() => transitionStart(1)}
                    style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Graph 2</Text>
                </Pressable>
            </View>
            {graphData[state.current.current].displayYAxisValues()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    buttonStyle: {
        marginRight: 20,
        backgroundColor: '#6231ff',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
    },
});