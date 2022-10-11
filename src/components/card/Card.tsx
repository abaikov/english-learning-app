import React from 'react';
import { CardAppearingAnimation } from './card-appearing-animation/CardAppearingAnimation';
import { CardRoot } from './card-root/CardRoot';
import { ICardProps } from './type/ICardProps';
import { CardContentWrap } from './card-content-wrap/CardContentWrap';
import { ECardStatus } from './type/ECardStatus';
import { CardContentForUndefinedStatus } from './card-content-for-undefined-status/CardContentForUndefinedStatus';
import { CardHeader } from './card-header/CardHeader';
import { CardScroller } from './card-scroller/CardScroller';
import { CardBottomButtons } from './card-bottom-buttons/CardBottomButtons';
import { CardContentForLearningStatus } from './card-content-for-learning-status/CardContentForLearningStatus';
import { View, Text } from 'react-native';
import { CardStyleSheet } from './CardStyleSheet';

/**
 * Can be used for words and idioms
 */
export const Card = (props: ICardProps) => {
    let CardContent;

    switch (props.status) {
        case ECardStatus.UNDEFINED:
            CardContent = CardContentForUndefinedStatus;
            break;
        default:
            CardContent = CardContentForLearningStatus;
            break;
    }

    return <CardRoot>
        <CardAppearingAnimation 
            {...props}
        >
            <CardContentWrap>
                <CardScroller>
                    <CardHeader {...props}/>
                    <CardContent {...props}/> 
                    <View style={CardStyleSheet.contentBottomPadder}/> 
                </CardScroller>
                <CardBottomButtons {...props}/>
            </CardContentWrap>
        </CardAppearingAnimation>
    </CardRoot>
}
