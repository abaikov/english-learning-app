import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Speakable } from '../../../lib/Speakable';
import { CardPhonetic } from '../card-phonetic/CardPhonetic';
import { ICardProps } from '../type/ICardProps';
import { CardTextBlockStyleSheet } from './CardTextBlockStyleSheet';

export const CardTextBlock = (props: ICardProps) => {
    return <TouchableOpacity 
        style={CardTextBlockStyleSheet.root}
        onPress={() => {
            Speakable.speak(props.text);
        }}
        touchSoundDisabled
    >
        <Text style={CardTextBlockStyleSheet.text}>
            {props.text}
        </Text>
        <CardPhonetic {...props} />
    </TouchableOpacity>
}
