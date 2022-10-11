import React from 'react';
import { View, Animated } from 'react-native';
import { EProjectAnimationTime } from '../../palette/EProjectAnimationTime';
import { CardExamplesList } from '../card-examples-list/CardExamplesList';
import { CardTranslation } from '../card-translation/CardTranslation';
import { ECardContentState } from '../type/ECardContentState';
import { ICardProps } from '../type/ICardProps';
import { CardTranslationWithMeaningListAndAnimationStyleSheet } from './CardTranslationWithMeaningListAndAnimationStyleSheet';

export const CardTranslationWithMeaningListAndAnimation = (props: ICardProps) => {
    const translationOpacityAnimationRef = React.useRef<Animated.Value>(new Animated.Value(0));
    const onTranslationAppearedRef = React.useRef(props.onTranslationAppeared);
    onTranslationAppearedRef.current = props.onTranslationAppeared;

    React.useEffect(() => {
        if (props.contentState == ECardContentState.TEXT_WITH_TRANLATION_AND_EXAMPLES_APPEARING) {
            translationOpacityAnimationRef.current.setValue(0);
            Animated.timing(
                translationOpacityAnimationRef.current,
                {
                    toValue: 1,
                    duration: EProjectAnimationTime.SHORT,
                    useNativeDriver: true,
                }
            ).start(() => {
                onTranslationAppearedRef.current();
            });
        }
    }, [props.contentState]);
    
    return <Animated.View style={[
        CardTranslationWithMeaningListAndAnimationStyleSheet.root,
        props.contentState == ECardContentState.TEXT_WITH_TRANLATION_AND_EXAMPLES_APPEARING 
            ? {
                opacity: translationOpacityAnimationRef.current
            }
            : null
    ]}>
        <View>
            <CardTranslation>
                {props.translation}
            </CardTranslation>
        </View>
        <CardExamplesList {...props}/>
    </Animated.View>
}
