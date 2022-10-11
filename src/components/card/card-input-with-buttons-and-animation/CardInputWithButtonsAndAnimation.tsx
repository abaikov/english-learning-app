import React from 'react';
import { Animated, View, Text } from 'react-native';
import { parseToRgb, rgb } from 'polished';
import { EProjectAnimationTime } from '../../palette/EProjectAnimationTime';
import { CardInput } from '../card-input/CardInput';
import { CardShowTranslationButton } from '../card-show-translation-button/CardShowTranslationButton';
import { ECardContentState } from '../type/ECardContentState';
import { ICardProps } from '../type/ICardProps';
import { CardInputWithButtonsAndAnimationStyleSheet } from './CardInputWithButtonsAndAnimationStyleSheet';
import { EProjectColor } from '../../palette/EProjectColor';
import Color from 'color';

const RGBPink = Color(EProjectColor.PINK).rgb().string();
const RGBRed = Color(EProjectColor.RED).rgb().string();

export const CardInputWithButtonsAndAnimation = (props: ICardProps) => {
    const isInErrorState = props.contentState == ECardContentState.USER_TYPED_TEXT_ERROR_ANIMATION;
    const rootOpacityAnimationRef = React.useRef<Animated.Value>(new Animated.Value(1));
    const errorAnimationRef = React.useRef(new Animated.Value(0));
    const onUserTypedTextInputErrorAnimationEndRef = React.useRef(props.onUserTypedTextInputErrorAnimationEnd);
    onUserTypedTextInputErrorAnimationEndRef.current = props.onUserTypedTextInputErrorAnimationEnd;
    const onUserTypedTextInputDisappearedRef = React.useRef(props.onUserTypedTextInputDisappeared);
    onUserTypedTextInputDisappearedRef.current = props.onUserTypedTextInputDisappeared;

    React.useEffect(() => {
        if (props.contentState == ECardContentState.USER_TYPED_TEXT_INPUT_HIDDING) {
            rootOpacityAnimationRef.current.setValue(1);
            Animated.timing(
                rootOpacityAnimationRef.current,
                {
                    toValue: 0,
                    duration: EProjectAnimationTime.SHORT,
                    useNativeDriver: true,
                }
            ).start(() => {
                onUserTypedTextInputDisappearedRef.current();
            });
        } else if (isInErrorState) {
            errorAnimationRef.current.setValue(0);
            Animated.sequence([
                Animated.timing(
                    errorAnimationRef.current,
                    {
                        toValue: 1,
                        duration: EProjectAnimationTime.SHORT,
                        useNativeDriver: false,
                    }
                ),
                Animated.delay(200),
                Animated.timing(
                    errorAnimationRef.current,
                    {
                        toValue: 0,
                        duration: EProjectAnimationTime.SHORT,
                        useNativeDriver: false,
                    }
                ),
            ]).start(() => {
                onUserTypedTextInputErrorAnimationEndRef.current();
            });
        }
    }, [props.contentState]);
    
    return <Animated.View style={[
        CardInputWithButtonsAndAnimationStyleSheet.root,
        props.contentState == ECardContentState.USER_TYPED_TEXT_INPUT_HIDDING
            ? {
                opacity: rootOpacityAnimationRef.current as any
            }
            : null
    ]}>
        <Animated.View 
            style={[
                CardInputWithButtonsAndAnimationStyleSheet.inputWrap,
                isInErrorState
                    ? {
                        borderBottomColor: errorAnimationRef.current.interpolate({
                            inputRange: [0, 1],
                            outputRange: [RGBPink, RGBRed]
                        })
                    }
                    : null
            ]}
        >
            <CardInput
                value={props.userTypedText || undefined}
                onChange={props.onUserTypedTextChange}
                placeholder={props.userTypedTextInputPlaceholder}
                onSubmitEditing={props.onUserTypedTextSubmit}
            />
        </Animated.View>
        <Animated.View
            style={{
                opacity: isInErrorState ? errorAnimationRef.current : 0
            }}
        >
            <Text style={CardInputWithButtonsAndAnimationStyleSheet.underInputText}>
                WRONG
            </Text>
        </Animated.View>
        <View>
            <CardShowTranslationButton
                onPress={props.onShowRightAnswerButtonClick}
            />
        </View>
    </Animated.View>
}
