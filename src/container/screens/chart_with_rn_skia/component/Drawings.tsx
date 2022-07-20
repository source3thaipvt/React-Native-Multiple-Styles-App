import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderApp from '../../../component/Header';
import { StylesApp } from '../../../../common/Constant';

const Drawings = ({ navigation, route }: any) => {
    const { id, title, type, screenName } = navigation?.state?.params;
    return (
        <View style={StylesApp.container}>
            <HeaderApp style={{ backgroundColor: '#FF4500d9' }} title={title ?? ' Khong co tieu de'} isIconLeft />
            <Text>Drawings</Text>
        </View>
    )
}

export default Drawings

const styles = StyleSheet.create({})