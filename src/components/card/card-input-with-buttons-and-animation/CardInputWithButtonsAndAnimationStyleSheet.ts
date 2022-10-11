import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';

export const CardInputWithButtonsAndAnimationStyleSheet = StyleSheet.create({
    root: {
        paddingTop: 20,
    },
    inputWrap: {
        borderBottomColor: EProjectColor.PINK,
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    underInputText: {
        padding: 8,

        color: EProjectColor.RED,
        textAlign: 'center',
    },
})
