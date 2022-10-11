import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Speakable } from '../../../lib/Speakable';
import { ICardProps } from '../type/ICardProps';
import { sample } from 'lodash';
import { CardExamplesListStyleSheet } from './CardExamplesListStyleSheet';

export const CardExamplesList = (props: ICardProps) => {
    if (!props.examples?.length) return null;

    return <View style={CardExamplesListStyleSheet.root}>
        {props.examples?.map(example => {
            return <TouchableOpacity
                key={example.title || example.text}
                onPress={() => {
                    if (example.text) {
                        Speakable.speak(example.text);
                    } else {
                        Speakable.speak(sample([
                            'There is nothing',
                            'Nothing to say',
                            'Oh',
                            'Doh',
                        ]));
                    }
                }}
                touchSoundDisabled
            >
                {
                    example.title 
                        ? <Text 
                            style={CardExamplesListStyleSheet.titleText}
                        >
                            {example.title}
                        </Text> 
                        : null
                }
                <Text style={CardExamplesListStyleSheet.exampleText}>
                    {example.text || '—'}
                </Text>
            </TouchableOpacity>
        })}
    </View>
}
