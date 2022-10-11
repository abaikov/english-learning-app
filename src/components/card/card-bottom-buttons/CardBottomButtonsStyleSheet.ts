import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';
import { ECardSize } from '../type/ECardSize';

export const CardBottomButtonsStyleSheet = StyleSheet.create({
    root: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,

        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',

        width: '100%',
        height: ECardSize.BOTTOM_BUTTONS_HEIGHT,
        padding: 16,

        // backgroundColor: EProjectColor.BACKGROUND_LIGHT_GRAY
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 12,
    },
    buttonText: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonRedText: {
        color: EProjectColor.RED,
    },
    buttonRedActive: {
        backgroundColor: EProjectColor.RED,
    },
    buttonPinkText: {
        color: EProjectColor.PINK,
    },
    buttonPinkActive: {
        backgroundColor: EProjectColor.PINK,
    },
    buttonYellowText: {
        color: EProjectColor.YELLOW,
    },
    buttonYellowActive: {
        backgroundColor: EProjectColor.YELLOW,
    },
    buttonGreenText: {
        color: EProjectColor.GREEN,
    },
    buttonGreenActive: {
        backgroundColor: EProjectColor.GREEN,
    },
    buttonTextActive: {
        color: EProjectColor.BACKGROUND_LIGHT_GRAY
    }
})
