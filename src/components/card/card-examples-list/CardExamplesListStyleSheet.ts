import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';

export const CardExamplesListStyleSheet = StyleSheet.create({
    root: {
        paddingTop: 16,
        paddingBottom: 16,
    },
    titleText: {
        paddingBottom: 4,
        color: EProjectColor.BLUE,
        fontSize: 12,
    },
    exampleText: {
        paddingBottom: 16,

        color: EProjectColor.WHITE,
        fontSize: 16,
    }
})
