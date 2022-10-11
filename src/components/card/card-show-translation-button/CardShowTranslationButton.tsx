import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { CardShowTranslationButtonStyleSheet } from './CardShowTranslationButtonStyleSheet'

export const CardShowTranslationButton = React.memo((props: { onPress: () => void }) => {
    return <TouchableOpacity
        style={CardShowTranslationButtonStyleSheet.root}
        onPress={props.onPress}
    >
        <Text style={CardShowTranslationButtonStyleSheet.text}>
            SHOW TRANSLATION
        </Text>
    </TouchableOpacity>
})
