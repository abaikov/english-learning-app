import React from 'react';
import { View, Text } from 'react-native';
import { CardGuideStyleSheet } from './CardGuideStyleSheet';

export const CardGuide = () => {
    return <View>
        <View style={CardGuideStyleSheet.block}>
            <Text style={[
                CardGuideStyleSheet.text,
                CardGuideStyleSheet.textBold
            ]}>
                Card controls for new cards
            </Text>
        </View>
        <View style={CardGuideStyleSheet.block}>
            <View style={CardGuideStyleSheet.definition}>
                <Text style={[
                    CardGuideStyleSheet.text,
                    CardGuideStyleSheet.textBold,
                    CardGuideStyleSheet.textGreen,
                    CardGuideStyleSheet.textCentered,
                ]}>
                    DO NOT{'\n'}REPEAT IT
                </Text>
            </View>
            <View style={CardGuideStyleSheet.description}>
                <Text style={CardGuideStyleSheet.text}>
                    - excludes card from the repetition queue
                </Text>
            </View>
        </View>
        <View style={CardGuideStyleSheet.block}>
            <View style={CardGuideStyleSheet.definition}>
                <Text style={[
                    CardGuideStyleSheet.text,
                    CardGuideStyleSheet.textBold,
                    CardGuideStyleSheet.textYellow,
                    CardGuideStyleSheet.textCentered,
                ]}>
                    REPEAT IT{'\n'}SOMETIMES
                </Text>
            </View>
            <View style={CardGuideStyleSheet.description}>
                <Text style={CardGuideStyleSheet.text}>
                    - half the reps
                </Text>
            </View>
        </View>
        <View style={CardGuideStyleSheet.block}>
            <View style={CardGuideStyleSheet.definition}>
                <Text style={[
                    CardGuideStyleSheet.text,
                    CardGuideStyleSheet.textBold,
                    CardGuideStyleSheet.textPink,
                    CardGuideStyleSheet.textCentered,
                ]}>
                    REPEAT IT{'\n'}OFTEN
                </Text>
            </View>
            <View style={CardGuideStyleSheet.description}>
                <Text style={CardGuideStyleSheet.text}>
                    - repetitions on a full schedule 
                </Text>
            </View>
        </View>
        <View style={CardGuideStyleSheet.block}>
            <Text style={[
                CardGuideStyleSheet.text,
                CardGuideStyleSheet.textBold
            ]}>
                Card controls for learning cards
            </Text>
        </View>
        <View style={CardGuideStyleSheet.block}>
            <View style={CardGuideStyleSheet.definition}>
                <Text style={[
                    CardGuideStyleSheet.text,
                    CardGuideStyleSheet.textBold,
                    CardGuideStyleSheet.textGreen,
                    CardGuideStyleSheet.textCentered,
                ]}>
                    SUCCESS
                </Text>
            </View>
            <View style={CardGuideStyleSheet.description}>
                <Text style={CardGuideStyleSheet.text}>
                    - marks the word as repeated this time
                </Text>
            </View>
        </View>
        <View style={CardGuideStyleSheet.block}>
            <View style={CardGuideStyleSheet.definition}>
                <Text style={[
                    CardGuideStyleSheet.text,
                    CardGuideStyleSheet.textBold,
                    CardGuideStyleSheet.textYellow,
                    CardGuideStyleSheet.textCentered,
                ]}>
                    RETRY{'\n'}LATER
                </Text>
            </View>
            <View style={CardGuideStyleSheet.description}>
                <Text style={CardGuideStyleSheet.text}>
                    - puts the word at the end of the repetition queue without resetting progress. 
                    Use this when you know a word but failed to match it to the translation by mistake.
                </Text>
            </View>
        </View>
        <View style={CardGuideStyleSheet.block}>
            <View style={CardGuideStyleSheet.definition}>
                <Text style={[
                    CardGuideStyleSheet.text,
                    CardGuideStyleSheet.textBold,
                    CardGuideStyleSheet.textRed,
                    CardGuideStyleSheet.textCentered,
                ]}>
                    FAIL
                </Text>
            </View>
            <View style={CardGuideStyleSheet.description}>
                <Text style={CardGuideStyleSheet.text}>
                    - resets repetition progress to start learning a word from scratch. 
                    Use it every time you forget a word.
                </Text>
            </View>
        </View>
    </View>
}
