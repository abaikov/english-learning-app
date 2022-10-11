import React from 'react';
import { View, Text, Animated } from 'react-native';
import { CardPhonetic } from '../card-phonetic/CardPhonetic';
import { CardShowTranslationButtonWithAnimation } from '../card-show-translation-button/CardShowTranslationButtonWithAnimation';
import { CardTextBlock } from '../card-text-block/CardTextBlock';
import { CardTranslationWithMeaningListAndAnimation } from '../card-translation-with-meaning-list-and-animation/CardTranslationWithMeaningListAndAnimation';
import { ECardContentState } from '../type/ECardContentState';
import { ICardProps } from '../type/ICardProps';
import { CardContentForUndefinedStatusStyleSheet } from './CardContentForUndefinedStatusStyleSheet';

export const CardContentForUndefinedStatus = (props: ICardProps) => {
    let content;

    switch (props.contentState) {
        case ECardContentState.TEXT_ONLY:
        case ECardContentState.SHOW_TRANSLATION_BUTTON_HIDDING:
            content = <CardShowTranslationButtonWithAnimation {...props}/>;
            break;
        case ECardContentState.TEXT_WITH_TRANLATION_AND_EXAMPLES_APPEARING:
        case ECardContentState.TEXT_WITH_TRANLATION_AND_EXAMPLES:
            content = <CardTranslationWithMeaningListAndAnimation {...props}/>;
            break;
    }

    return <View style={CardContentForUndefinedStatusStyleSheet.root}>
        <CardTextBlock {...props}/>
        {content}
    </View>
}
