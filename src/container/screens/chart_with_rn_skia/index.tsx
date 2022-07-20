import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StylesApp } from '../../../common/Constant'
import HeaderApp from '../../component/Header'



const ChartWithRNSkia = ({ navigation, route }: any) => {
    const { id, title, type, screenName } = navigation?.state?.params;
    return (
        <View style={StylesApp.container}>
            <HeaderApp style={{ backgroundColor: '#FF4500d9' }} title={title ?? ' Khong co tieu de'} isIconLeft />
            <Text>ChartWithRNSkia</Text>
        </View>
    )
}

export default ChartWithRNSkia

const styles = StyleSheet.create({

})