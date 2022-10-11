import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';

export const CardShowTranslationButtonStyleSheet = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 24,
    },
    text: {
        color: EProjectColor.PINK,
        fontWeight: 'bold',
        textAlign: 'center',
    } 
})
