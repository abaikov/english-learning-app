import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';

export const CardExampleSlideWithAnimationStyleSheet = StyleSheet.create({
    root: {
        // padding: 8,
    },
    titleText: {
        paddingTop: 32,
        paddingBottom: 2,

        color: EProjectColor.PINK,
        textAlign: 'center',
        fontSize: 14,
    },
    subtitleText: {
        paddingBottom: 12,

        color: EProjectColor.BLUE,
        textAlign: 'center',
        fontSize: 12,
    },
    exampleText: {
        padingTop: 16,

        color: EProjectColor.WHITE,
        textAlign: 'center',
        fontSize: 16,
    },
    skipButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 24,
    },
    skipButtonText: {
        color: EProjectColor.PINK,

        textAlign: 'center',
        fontWeight: 'bold',
    } 
})
