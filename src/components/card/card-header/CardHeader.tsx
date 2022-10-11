import React from 'react';
import { Text, View } from 'react-native';
import { ECardStatus } from '../type/ECardStatus';
import { ICardProps } from '../type/ICardProps';
import { CardHeaderStyleSheet } from './CardHeaderStyleSheet';

export const CardHeader = (props: ICardProps) => {
    let title: string;

    switch (props.status) {
        case ECardStatus.UNDEFINED:
            title = 'NEW';
            break; 
        case ECardStatus.ON_REPEAT:
            title = 'REPEAT IT SOMETIMES';
            break; 
        case ECardStatus.ON_STUDY:
        default: 
            title = 'WANT TO LEARN IT';
            break;
    }

    return <View style={CardHeaderStyleSheet.root}>
        <Text style={CardHeaderStyleSheet.title}>
            {title}
        </Text>
        {props.level 
            ? <Text style={CardHeaderStyleSheet.subtitle}>
                Level - {props.level} | Stage - {props.repetitionStage}
            </Text>
            : undefined
        }
    </View>
}
