import React from 'react';
import { View } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';

const LineGraph = () => {
    const data = [
        {x: 0, y: 20},
        {x: 20, y: 50},
        {x: 40, y: 10},
        {x: 60, y: 80},
        {x: 30, y: 100},
    ];

    const chartWidth = 300;
    const chartHeight = 300;

    const xScale = chartWidth / (data.length - 1);
    const yScale = chartHeight / 100;

    const lines = data.map((point, index) => {
        const x = index * xScale;
        const y = chartHeight - point.y * yScale;
        return <Line key={index} x1={x} y1={chartHeight} x2={x} y2={y} stroke={"blue"} strokeWidth={"2"}/>;
    });

    const circles = data.map((point, index) => {
        const x = index * xScale;
        const y = chartHeight - point.y * yScale;
        return <Circle key={index} cx={x} cy={y} r={"4"} fill={"blue"} />;
    });

    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Svg width={chartWidth} height={chartHeight}>
                {lines}
                {circles}
            </Svg>
        </View>
    )
}

export default LineGraph;