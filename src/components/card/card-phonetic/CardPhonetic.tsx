import React from 'react';
import { Text } from 'react-native';
import { CardPhoneticStyleSheet } from './CardPhoneticStyleSheet';

export const CardPhonetic = (props: { phonetic?: string }) => {
    return <Text style={CardPhoneticStyleSheet.root}>
        {'[' + (props.phonetic || '').replace(/\//g, '') + ']'}
    </Text>
}
