import { StyleSheet } from 'react-native';
import { EProjectBorderRadius } from '../palette/EProjectBorderRadius';
import { EProjectColor } from '../palette/EProjectColor';

export const ConfirmPopupStyleSheet = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popup: {
        borderRadius: EProjectBorderRadius.DEFAULT,
        backgroundColor: EProjectColor.WHITE,
    },
    textWrap: {
        padding: 24,
        paddingBottom: 8,
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
    },
    buttonsWrap: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

        height: 42,
    },
    buttonText: {
        fontSize: 14,
    }
})
