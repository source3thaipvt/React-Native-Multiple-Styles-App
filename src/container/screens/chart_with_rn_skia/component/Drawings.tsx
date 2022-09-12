import { StyleSheet, View, useWindowDimensions } from 'react-native'
import React from 'react'
import HeaderApp from '../../../component/Header';
import { StylesApp } from '../../../../common/Constant';

import { Canvas, Circle, Group, Oval, rect, center, rrect, Paint, SweepGradient, vec, RadialGradient, BlurMask, Text, DiscretePathEffect, Path } from '@shopify/react-native-skia';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
import PageView from '../../../component/PageView';
const Drawings = ({ navigation, route }: any) => {
    const { id, title, type, screenName } = navigation?.state?.params;
    const { width, height } = useWindowDimensions();
    const rct = { x: width / 6, y: height / 2.22, width: width * 0.7, height: height * 0.1 }
    const rcenter = { x: width / 2, y: height / 2 }
    const logo = images.ic_back_black;
    return (
        <PageView>
            <HeaderApp title={title ?? ' Khong co tieu de'} isIconLeft />
            <Canvas style={{flex:1, marginTop: sizes._header_height, width:width}}>
                <Paint style="stroke" strokeWidth={18}>
                    <RadialGradient c={vec(rcenter.x + 25, rcenter.y)} r={50} colors={['#ff89', '#00fe', '#ff0000']} />
                </Paint>

                <Circle c={rcenter} r={10} color='red' />
                <Paint style="stroke" strokeWidth={18}>
                    <SweepGradient c={rcenter} colors={['#ff89', '#00fe', '#ff0000']} />
                    <BlurMask blur={20} style='normal' />
                    <DiscretePathEffect deviation={5} length={10} />
                </Paint>
                <Group>
                    <Oval rect={rct} color='lightblue' strokeWidth={10} style='stroke' />
                    <Group transform={[{ rotate: Math.PI / 3 }]} origin={{ x: width / 2, y: height / 2 }} >
                        <Oval rect={rct} color='lightblue' strokeWidth={10} style='stroke' />
                    </Group>
                    <Group transform={[{ rotate: -Math.PI / 3 }]} origin={{ x: width / 2, y: height / 2 }}  >
                        <Oval rect={rct} color='lightblue' strokeWidth={10} style='stroke' />
                    </Group>
                </Group>
            </Canvas>
        </PageView>
    )
}

export default Drawings

const styles = StyleSheet.create({})