import React from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { EProjectAnimationTime } from '../../palette/EProjectAnimationTime';
import { ECardContentState } from '../type/ECardContentState';
import { ICardProps } from '../type/ICardProps';
import { CardExampleSlideWithAnimationStyleSheet } from './CardExampleSlideWithAnimationStyleSheet';

export const CardExampleSlideWithAnimation = (props: ICardProps) => {
    const disappearingAnimationRef = React.useRef(new Animated.Value(1));
    const onExampleDisappearedRef = React.useRef(props.onExampleDisappeared);
    onExampleDisappearedRef.current = props.onExampleDisappeared;

    React.useEffect(() => {
        if (props.contentState == ECardContentState.HINT_EXAMPLE_HIDDING) {
            disappearingAnimationRef.current.setValue(1);
            Animated.timing(
                disappearingAnimationRef.current,
                {
                    toValue: 0,
                    duration: EProjectAnimationTime.SHORT,
                    useNativeDriver: true,
                }
            ).start(() => {
                onExampleDisappearedRef.current();
            });
        }
    }, [props.contentState])

    return <Animated.View
        style={[CardExampleSlideWithAnimationStyleSheet.root, {
            opacity: props.contentState == ECardContentState.HINT_EXAMPLE_HIDDING
                ? disappearingAnimationRef.current
                : 1
        }]}
    >
        <Text style={CardExampleSlideWithAnimationStyleSheet.titleText}>
            Usage example
        </Text>
        <Text style={CardExampleSlideWithAnimationStyleSheet.subtitleText}>
            This is a hint for your word repetition{'\n'}
            Try to understand the sentence below and then{'\n'}
            press the "I AM READY" button
        </Text>
        <Text style={CardExampleSlideWithAnimationStyleSheet.exampleText}>
            {props.hintExample}
        </Text>
        <TouchableOpacity
            style={CardExampleSlideWithAnimationStyleSheet.skipButton}
            onPress={props.onSkipExampleButtonClick}
            touchSoundDisabled
        >
            <Text style={CardExampleSlideWithAnimationStyleSheet.skipButtonText}>
                I AM READY
            </Text>
        </TouchableOpacity>
    </Animated.View>
}
