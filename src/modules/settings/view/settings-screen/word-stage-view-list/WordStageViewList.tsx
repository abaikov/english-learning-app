import React from 'react';
import { View } from 'react-native';
import { WordStageViewConnected } from '../word-stage-view/WordStageViewConnected';
import { IWordStageViewListProps } from './type/IWordStageViewListProps';
import { WordStageViewListStyleSheet } from './WordStageViewListStyleSheet';

export const WordStageViewList = (props: IWordStageViewListProps) => {
    return <View>
        {props.stages.map((item, index) => {
            return <View 
                style={WordStageViewListStyleSheet.stageItem}
                key={index}
            >
                <WordStageViewConnected stageIndex={index}/>
            </View>
        })}
    </View>
}
