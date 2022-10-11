import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';

export const CardTranslationWithMeaningListAndAnimationStyleSheet = StyleSheet.create({
    root: {
        paddingTop: 8
    },
    translation: {
        paddingTop: 24,
        paddingBottom: 16
    },
    text: {
        color: EProjectColor.WHITE,
        fontSize: 28,
        lineHeight: 28,
    }
})
