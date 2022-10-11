import React from 'react';
import { ScrollView } from 'react-native';
import { CardScrollerStyleSheet } from './CardScrollerStyleSheet';

export const CardScroller = (props: { children: JSX.Element | JSX.Element[] }) => {
    return <ScrollView style={CardScrollerStyleSheet.root}>
        {props.children}
    </ScrollView>
}
