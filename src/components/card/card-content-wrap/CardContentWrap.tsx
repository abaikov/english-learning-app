import React from 'react';
import { View } from 'react-native';
import { CardContentWrapStyleSheet } from './CardContentWrapStyleSheet';

export const CardContentWrap = (props: { children: JSX.Element | JSX.Element[] }) => {
    return <View style={CardContentWrapStyleSheet.root}>
        {props.children}
    </View>
}
