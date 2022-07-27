import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StylesApp } from '../../../common/Constant'
import HeaderApp from '../../component/Header'
import NavigationService from '../base/NavigationService'
import { ScreenName } from '../base/AppContainer'
import ItemListApp from '../../component/ItemListApp'
import sizes from '../../../res/sizes'
import DrawingsRNSkia from './component/Drawings'
import HuesRNSkia from './component/Hues'
import StockPointRNSkia from './component/StockPoints'
import PageView from '../../component/PageView'
const DataMultiple = [
    {
        id: '0',
        title: 'Drawings',
        type: '',
        screenName: 'DRAWINGSRNSKIA'
    },
    {
        id: '1',
        title: 'Hue',
        type: '',
        screenName: 'HUESRNSKIA'
    },
    {
        id: '2',
        title: 'Stock Ponit',
        type: '',
        screenName: 'STOCKPONIT'
    },
    {
        id: '3',
        title: 'React Native Color',
        type: '',
        screenName: ''
    },
]
const SwitchScreen = (data: any) => {
    switch (data?.screenName) {
        case 'DRAWINGSRNSKIA':
            NavigationService.navigate(ScreenName.DRAWINGSRNSKIA, data)
            break;
        case 'HUESRNSKIA':
            NavigationService.navigate(ScreenName.HUESKIARNSKIA, data)
            break;
        case 'STOCKPONIT':
            NavigationService.navigate(ScreenName.STOCKPOINTRNSKIA, data)
            break;
        default:
            break;
    }
}


const ChartWithRNSkia = ({ navigation, route }: any) => {
    const { id, title, type, screenName } = navigation?.state?.params;
    return (
        <PageView>
            <HeaderApp style={{ backgroundColor: '#FF4500d9' }} title={title ?? ' Khong co tieu de'} isIconLeft />
            <FlatList
                data={DataMultiple}
                renderItem={({ item }) => <ItemListApp style={{ backgroundColor: '#ffdddf' }} props={item} onPress={() => { SwitchScreen(item) }} />}
                keyExtractor={item => item.id}
                style={{ flex: 1, marginTop: sizes._header_height, width: sizes._screen_width }}
            />
        </PageView>
    )
}

export default ChartWithRNSkia

export {
    DrawingsRNSkia,
    HuesRNSkia,
    StockPointRNSkia,

}

const styles = StyleSheet.create({

})