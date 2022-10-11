import React from 'react';
import { View, Animated } from 'react-native';
import { EProjectAnimationTime } from '../../palette/EProjectAnimationTime';
import { CardInputWithButtonsAndAnimation } from '../card-input-with-buttons-and-animation/CardInputWithButtonsAndAnimation';
import { CardTextWithExamplesAndAnimation } from '../card-text-with-examples-and-animation/CardTextWithExamplesAndAnimation';
import { CardTranslation } from '../card-translation/CardTranslation';
import { ECardContentState } from '../type/ECardContentState';
import { ICardProps } from '../type/ICardProps';

export const CardContentForLearningContentWithAnimation = (props: ICardProps) => {
    const appearingAnimationRef = React.useRef(new Animated.Value(0));
    const onUserTypedTextInputAppearedRef = React.useRef(props.onUserTypedTextInputAppeared);
    onUserTypedTextInputAppearedRef.current = props.onUserTypedTextInputAppeared;
    
    let content;

    switch (props.contentState) {
        case ECardContentState.TEXT_WITH_EXAMPLES:
        case ECardContentState.TEXT_WITH_EXAMPLES_APPEARING:
            content = <CardTextWithExamplesAndAnimation {...props} />;
            break;
        case ECardContentState.USER_TYPED_TEXT_INPUT:
        case ECardContentState.USER_TYPED_TEXT_ERROR_ANIMATION:
        case ECardContentState.USER_TYPED_TEXT_INPUT_HIDDING:
        case ECardContentState.USER_TYPED_TEXT_INPUT_APPEARING:
        default:
            content = <CardInputWithButtonsAndAnimation {...props} />;
            break;
    }

    React.useEffect(() => {
        if (props.contentState == ECardContentState.USER_TYPED_TEXT_INPUT_APPEARING) {
            appearingAnimationRef.current.setValue(0);
            Animated.timing(
                appearingAnimationRef.current,
                {
                    toValue: 1,
                    duration: EProjectAnimationTime.SHORT,
                    useNativeDriver: true,
                }
            ).start(() => {
                onUserTypedTextInputAppearedRef.current();
            });
        }
    }, [props.contentState])

    return <Animated.View
        style={{
            opacity: props.contentState == ECardContentState.USER_TYPED_TEXT_INPUT_APPEARING
                ? appearingAnimationRef.current
                : 1
        }}
    >
        <CardTranslation>
            {props.translation}
        </CardTranslation>
        {content}
    </Animated.View>
}
