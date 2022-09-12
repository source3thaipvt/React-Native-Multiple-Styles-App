import { StyleSheet, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import HeaderApp from '../../../component/Header';
import { StylesApp } from '../../../../common/Constant';

import {
    Canvas, Circle, Group, Oval, rect, center, rrect, Paint, SweepGradient,
    vec, RadialGradient, BlurMask, Text, DiscretePathEffect, Path,
    Fill, Shader, Skia, useTouchHandler, useValue, canvas2Polar, polar2Canvas

} from '@shopify/react-native-skia';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
import PageView from '../../../component/PageView';
const Hues = ({ navigation, route }: any) => {
    const { id, title, type, screenName } = navigation?.state?.params;
    const { width, height } = useWindowDimensions();
    const rct = { x: width / 6, y: height / 2.22, width: width * 0.7, height: height * 0.1 }
    const rcenter = { x: width / 2, y: height / 2 / 2 }
    const logo = images.ic_back_black;
    // The iResolution uniform is always present and provides
    // // the canvas size in pixels. 
    // uniform float cx;
    // uniform float cy;
    // uniform float r;
    // ${ShaderLib.Math}
    // ${ShaderLib.Colors}
    // float quadraticIn(float t) {
    //     return t*t;
    // }

    // half4 main(vec2 uv) {
    // float2 c = vec2(cx,cy);
    // float mag = distance(uv, c);
    // float theta = normalizeRad(canvas2Polar(uv,c).x)
    // return hsv2rgb(vec3(theta(TAU, quadraticIn(mag/r),1.0));
    // }
    const source = Skia.RuntimeEffect.Make(`
            uniform vec2 c;
            uniform float r;
            uniform float blue;

            vec4 main(vec2 pos) {
            vec2 normalized = pos/vec2(2 * r);
            return distance(pos, c) > r ? vec4(1).rbga : vec4(normalized, blue, 1).rbga;

            }`)!;

    const r = (width - 32) / 2
    const [cx, setCx] = useState<any>(rcenter.x);
    const [cy, setCy] = useState<any>(rcenter.y);
    const translateX = useValue<any>(rcenter.x)
    const translateY = useValue<any>(rcenter.y)
    const onTouch = useTouchHandler({
        onActive: (p) => {
            // con trỏ bị giới hạn trong vòng tròn
            const polar = canvas2Polar(p, rcenter);
            const { x, y } = polar2Canvas(
                { theta: polar.theta, radius: Math.min(polar.radius, r) },
                rcenter
            )
            translateX.current=x;
            setCx(translateX.current)
            translateY.current=y;
            setCy(translateY.current)
           
        }
    })

    const c = vec(2 * r, r);
    const blue = 1.0

    return (
        <PageView>
            <HeaderApp title={title ?? ' Khong co tieu de'} isIconLeft />
            <Canvas style={{ flex: 1, marginTop: sizes._header_height, width: width }} onTouch={onTouch}>
                <Fill color='lightblue' />
                <Paint>
                    <BlurMask blur={20} style='solid' />
                    <Shader source={source} uniforms={{ c, r, blue }} />
                </Paint>
                <Circle c={rcenter} r={r} />
                <Circle c={vec(cx, cy)} r={10} color='lightblue' />
            </Canvas>
            {/* <View style={{flex:1}}></View> */}
        </ PageView>
    )
}

export default Hues

const styles = StyleSheet.create({})