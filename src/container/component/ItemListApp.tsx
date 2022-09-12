import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextViewBase from '../../components/TextViewBase'
import sizes from '../../res/sizes'
import colors from '../../res/colors'

const ItemListApp = (props: any) => {
    return (
        <TouchableOpacity

            style={[{
                backgroundColor: '#9ad9f2',
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
            }, props?.style]}
            onPress={props?.onPress}
           
        >
            <TextViewBase title={props?.props?.title ?? 'Cai nay la rong rong va rong'}
                style={{
                    fontSize: sizes._22sdp,
                    color: colors._text_white,
                }} />
        </TouchableOpacity>
    )
}

export default ItemListApp

