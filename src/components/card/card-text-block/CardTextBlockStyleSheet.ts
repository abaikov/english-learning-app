import { StyleSheet } from 'react-native';
import { EProjectBorderRadius } from '../../palette/EProjectBorderRadius';
import { EProjectColor } from '../../palette/EProjectColor';

export const CardTextBlockStyleSheet = StyleSheet.create({
    root: {
        marginTop: 12,
        marginBottom: 8,
        padding: 16,

        borderRadius: EProjectBorderRadius.DEFAULT,
        borderWidth: 1,
        borderColor: EProjectColor.PINK,
        // backgroundColor: EProjectColor.PINK,
    },
    wrapper: {

    },
    text: {
        color: EProjectColor.WHITE,
        fontSize: 28,
        textAlign: 'center',
        lineHeight: 28,
        // color: EProjectColor.BACKGROUND_GRAY,
    },
})
