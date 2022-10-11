import React from 'react';
import { View } from 'react-native';
import { CardRootStyleSheet } from './CardRootStyleSheet';
import { ICardRootProps } from './type/ICardRootProps';

export const CardRoot = (props: ICardRootProps) => {
    return <View style={CardRootStyleSheet.cardRoot}>
        {props.children}
    </View>
}
