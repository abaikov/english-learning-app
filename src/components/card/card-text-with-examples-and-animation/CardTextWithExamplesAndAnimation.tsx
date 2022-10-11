import React from 'react';
import { Animated, View } from 'react-native';
import { EProjectAnimationTime } from '../../palette/EProjectAnimationTime';
import { CardExamplesList } from '../card-examples-list/CardExamplesList';
import { CardTextBlock } from '../card-text-block/CardTextBlock';
import { ECardContentState } from '../type/ECardContentState';
import { ICardProps } from '../type/ICardProps';
import { CardTextWithExamplesAndAnimationStyleSheet } from './CardTextWithExamplesAndAnimationStyleSheet';

export const CardTextWithExamplesAndAnimation = (props: ICardProps) => {
    const textOpacityAnimationRef = React.useRef<Animated.Value>(new Animated.Value(0));
    const onTextAppearedRef = React.useRef(props.onTextAppeared);
    const isOnAppearing = props.contentState == ECardContentState.TEXT_WITH_EXAMPLES_APPEARING;
    onTextAppearedRef.current = props.onTextAppeared;

    React.useEffect(() => {
        if (isOnAppearing) {
            textOpacityAnimationRef.current.setValue(0);
            Animated.timing(
                textOpacityAnimationRef.current,
                {
                    toValue: 1,
                    duration: EProjectAnimationTime.SHORT,
                    useNativeDriver: true,
                }
            ).start(() => {
                onTextAppearedRef.current();
            });
        }
    }, [props.contentState]);
    
    return <Animated.View
        style={[
            CardTextWithExamplesAndAnimationStyleSheet.root,
            isOnAppearing
                ? {
                    opacity: textOpacityAnimationRef.current
                }
                : null
        ]}
    >
        <CardTextBlock {...props}/>
        <CardExamplesList {...props}/>
    </Animated.View>
}
