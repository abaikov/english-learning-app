import React from 'react';
import { View } from 'react-native';
import { CardExampleSlideWithAnimation } from '../card-example-slide-with-animation/CardExampleSlideWithAnimation';
import { ECardContentState } from '../type/ECardContentState';
import { ICardProps } from '../type/ICardProps';
import { CardContentForLearningContentWithAnimation } from './CardContentForLearningContentWithAnimation';
import { CardContentForLearningStatusStyleSheet } from './CardContentForLearningStatusStyleSheet';

export const CardContentForLearningStatus = (props: ICardProps) => {
    let content;

    switch (props.contentState) {
        case ECardContentState.HINT_EXAMPLE:
        case ECardContentState.HINT_EXAMPLE_HIDDING:
            content = <CardExampleSlideWithAnimation {...props}/>;
            break;
        default:
            content = <CardContentForLearningContentWithAnimation {...props} />;
            break;
    }

    return <View style={CardContentForLearningStatusStyleSheet.root}>
        {content}
    </View>
}
