import React from 'react';
import { Animated, View } from 'react-native';
import { EProjectAnimationTime } from '../../palette/EProjectAnimationTime';
import { ECardState } from '../type/ECardState';
import { ICardProps } from '../type/ICardProps';
import { CardAppearingAnimationStyleSheet } from './CardAppearingAnimationStyleSheet';
import { ICardAppearingAnimationProps } from './type/ICardAppearingAnimationProps';

export const CardAppearingAnimation = (props: ICardProps & ICardAppearingAnimationProps) => {
    const appearingAnimationRef = React.useRef(new Animated.Value(0));
    const animationIsInProgress = React.useRef(false);
    const onCardAppears = React.useRef(props.onCardAppeared);
    onCardAppears.current = props.onCardAppeared;
    const onCardDisappears = React.useRef(props.onCardDisappeared);
    onCardDisappears.current = props.onCardDisappeared;

    React.useEffect(() => {
        if (props.state == ECardState.APPEARING && !animationIsInProgress.current) {
            appearingAnimationRef.current.setValue(0);
            animationIsInProgress.current = true;
            Animated.timing(
                appearingAnimationRef.current,
                {
                    toValue: 1,
                    duration: EProjectAnimationTime.SHORT,
                    useNativeDriver: true,
                }
            ).start(() => {
                animationIsInProgress.current = false;
                onCardAppears.current();
            });
        } else if (props.state == ECardState.DISAPPEARING && !animationIsInProgress.current) {
            appearingAnimationRef.current.setValue(1);
            animationIsInProgress.current = true;
            Animated.timing(
                appearingAnimationRef.current,
                {
                    toValue: 0,
                    duration: EProjectAnimationTime.SHORT,
                    useNativeDriver: true,
                }
            ).start(() => {
                animationIsInProgress.current = false;
                onCardDisappears.current();
            });
        }
    }, [props.state]);
    const progress = (props.state == ECardState.APPEARING || props.state == ECardState.DISAPPEARING) 
        ? appearingAnimationRef.current
        : 1;

    return <Animated.View style={[
        CardAppearingAnimationStyleSheet.cardAppearingAnimation,
        {
            opacity: progress,
            transform: [{
                scale: progress
            }]
        }
    ]}>
        {props.children}
    </Animated.View>
}
