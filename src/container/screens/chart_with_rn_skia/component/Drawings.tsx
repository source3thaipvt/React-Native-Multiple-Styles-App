import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import HeaderApp from '../../../component/Header';
import { StylesApp } from '../../../../common/Constant';

import { Canvas, Circle, Group, Oval, rect, center } from '@shopify/react-native-skia';
const Drawings = () => {
    const { width, height } = useWindowDimensions();
    console.log(width, height);

    return (
        <Canvas style={{ flex: 1 }}>
            <Oval rect={{ x: 64, y: 64, width: 100, height: 200 }} color='lightblue' strokeWidth={10} style='stroke' x={width / 2} y={height / 2} />
            <Circle c={{ x: width / 2, y: height / 2 }} r={20} color='red' />
            <Group transform={[{ rotate: Math.PI / 3 }]} origin={{ x: width / 2, y: height / 2 }}  >
                <Oval rect={{ x: 64, y: 64, width: 100, height: 200 }} color='lightblue' strokeWidth={10} style='stroke' x={width / 2} y={height / 2} />
            </Group>
        </Canvas>
    )
}

export default Drawings

const styles = StyleSheet.create({})