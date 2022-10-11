import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../../../../components/palette/EProjectColor';

export const CardGuideStyleSheet = StyleSheet.create({
    root: {

    },
    block: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 14,
    },
    definition: {
        width: 100,
    },
    description: {
        flex: 1,
    },
    text: {
        color: EProjectColor.WHITE,

        fontSize: 14,
    },
    textBold: {
        fontWeight: 'bold',
    },
    textCentered: {
        textAlign: 'center',
    },
    textYellow: {
        color: EProjectColor.YELLOW,
    },
    textGreen: {
        color: EProjectColor.GREEN,
    },
    textPink: {
        color: EProjectColor.PINK,
    },
    textRed: {
        color: EProjectColor.RED,
    },
});
