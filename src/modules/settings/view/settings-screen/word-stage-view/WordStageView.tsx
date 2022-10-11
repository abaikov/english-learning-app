import React from 'react';
import FormattedDuration from 'react-intl-formatted-duration';
import { View, Text } from 'react-native';
import { IWordStageViewProps } from './type/IWordStageViewProps';
import { WordStageViewStyleSheet } from './WordStageViewStyleSheet';
import { IntlProvider } from 'react-intl';

export const WordStageView = (props: IWordStageViewProps) => {
    return <IntlProvider locale='en'>
        <View>
            <View style={WordStageViewStyleSheet.header}>
                <View style={WordStageViewStyleSheet.headerItem}>
                    <Text style={[
                        WordStageViewStyleSheet.text,
                        WordStageViewStyleSheet.textBold
                    ]}>
                        Stage - {props.stageIndex}
                    </Text>
                </View>
                <View style={WordStageViewStyleSheet.headerItem}>
                    <Text style={WordStageViewStyleSheet.text}>
                        {props.wordsCount} words
                    </Text>
                </View>
                {/* <View style={WordStageViewStyleSheet.headerItem}>
                    <Text style={WordStageViewStyleSheet.text}>
                        {props.stage.hintEnabled ? 'With hint' : 'Without hint'}
                    </Text>
                </View> */}
            </View>
            <View>
                <Text style={[
                    WordStageViewStyleSheet.text,
                    WordStageViewStyleSheet.textGray
                ]}>
                    Interval - <FormattedDuration 
                        seconds={props.stage.interval / 1000} 
                        textComponent={Text}
                        style={WordStageViewStyleSheet.textBold} 
                        format="{days} {hours} {minutes} {seconds}"
                    /> from the last repetition
                </Text>
            </View>
            {/* <View>
                <Text style={[
                    WordStageViewStyleSheet.text,
                    // WordStageViewStyleSheet.textGray
                ]}>
                    {props.stage.description}
                </Text>
            </View> */}
        </View>
    </IntlProvider>
}
