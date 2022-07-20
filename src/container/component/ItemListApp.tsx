import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextViewBase from '../../components/TextViewBase'
import sizes from '../../res/sizes'
import colors from '../../res/colors'

const ItemListApp = (props: any) => {

    console.log(props);

    return (
        <TouchableOpacity

            style={[{
                backgroundColor: '#f9c2ff',
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
            }, props?.style]}
            onPress={props?.onPress}
           
        >
            <TextViewBase title={props?.props?.title ?? 'Cai nay la rong rong va rong'}
                style={{
                    fontSize: sizes._22sdp,
                    color: colors._color_white,
                }} />
        </TouchableOpacity>
    )
}

export default ItemListApp

