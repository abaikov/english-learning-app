import React from 'react';
import { Text, View } from 'react-native';
import { ScreenStyleSheet } from '../../../../components/screen/ScreenStyleSheet';
import { WordCardConnected } from '../word-card/WordCardConnected';
import { IWordScreenProps } from './type/IWordScreenProps';

export const WordScreen = (props: IWordScreenProps) => {
    return <View style={[ScreenStyleSheet.root]}>
        <WordCardConnected word={props.currentWord}/>
    </View>
}
