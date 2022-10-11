import React from 'react';
import { Text, View } from 'react-native';
import { upperFirst } from 'lodash';
import { CardTranslationStyleSheet } from './CardTranslationStyleSheet';

export const CardTranslation = (props: { children: string }) => {
    return <View style={CardTranslationStyleSheet.root}>
        <Text style={CardTranslationStyleSheet.text}>
            {upperFirst(props.children)}
        </Text>
    </View>
}
