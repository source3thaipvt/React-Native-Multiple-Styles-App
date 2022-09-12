import { StyleSheet, View, useWindowDimensions, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import HeaderApp from '../../../component/Header';
import { StylesApp } from '../../../../common/Constant';

import {
    Canvas, Circle, Group, Oval, rect, center, rrect, Paint, SweepGradient,
    vec, RadialGradient, BlurMask, DiscretePathEffect, Path,
    Fill, Shader, Skia, useTouchHandler, useValue, canvas2Polar, polar2Canvas, useCanvas, useComputedValue,


} from '@shopify/react-native-skia';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
import PageView from '../../../component/PageView';
const StockPoints = ({ navigation, route }: any) => {
    const { id, title, type, screenName } = navigation?.state?.params;
    const { width, height } = useWindowDimensions();
    const rcenter = { x: width / 2, y: height / 2 }
    const [cx, setCx] = useState<any>(rcenter.x);
    const [cy, setCy] = useState<any>(rcenter.y);
    const r = (width - 32) / 2
    const onTouch = useTouchHandler({
        onActive: (p) => {
            // con trỏ bị giới hạn trong vòng tròn
            const polar = canvas2Polar(p, rcenter);
            const { x, y } = polar2Canvas(
                { theta: polar.theta, radius: Math.min(polar.radius, r) },
                rcenter
            )
            setCx(x);
            setCy(y);
        }
    })
    // const {size} = useCanvas();

    const rct = useComputedValue(() => {
        return rect(0, 0, width, height / 2);
    }, []);
    console.log('size', rct);

    return (
        <PageView>
            <HeaderApp title={title ?? ' Khong co tieu de'} isIconLeft />
            <Text style={{  marginTop: sizes._header_height, width: width }}>Stock Point</Text>
            {/* <Canvas style={{ flex: 1, marginTop: sizes._statusbar_height + sizes._header_height, width: width }} onTouch={onTouch}>
                <Group>

                </Group>
            </Canvas> */}
        </PageView>
    )
}

export default StockPoints

const styles = StyleSheet.create({})