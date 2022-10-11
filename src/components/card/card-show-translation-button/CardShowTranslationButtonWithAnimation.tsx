import React from 'react';
import { Animated, View } from 'react-native';
import { EProjectAnimationTime } from '../../palette/EProjectAnimationTime';
import { ECardContentState } from '../type/ECardContentState';
import { ICardProps } from '../type/ICardProps';
import { CardShowTranslationButton } from './CardShowTranslationButton';

export const CardShowTranslationButtonWithAnimation = (props: ICardProps) => {
    const showTranslationButtonOpacityAnimationRef = React.useRef<Animated.Value>(new Animated.Value(1));
    const onShowTranslationButtonDisappearedRef = React.useRef(props.onShowTranslationButtonDisappeared);
    onShowTranslationButtonDisappearedRef.current = props.onShowTranslationButtonDisappeared;
    
    React.useEffect(() => {
        showTranslationButtonOpacityAnimationRef.current.setValue(1);

        if (props.contentState == ECardContentState.SHOW_TRANSLATION_BUTTON_HIDDING) {
            Animated.timing(
                showTranslationButtonOpacityAnimationRef.current,
                {
                    toValue: 0,
                    duration: EProjectAnimationTime.SHORT,
                    useNativeDriver: true,
                }
            ).start(() => {
                onShowTranslationButtonDisappearedRef.current();
            });
        }
    }, [props.contentState]);

    return <Animated.View
        style={{
            opacity: props.contentState == ECardContentState.SHOW_TRANSLATION_BUTTON_HIDDING
                ? showTranslationButtonOpacityAnimationRef.current 
                : 1
        }}
    >
        <CardShowTranslationButton 
            onPress={props.onShowTranslationButtonClick} 
        />
    </Animated.View>;
}
