import { StyleSheet } from 'react-native';
import { EProjectBorderRadius } from '../../../../../components/palette/EProjectBorderRadius';
import { EProjectColor } from '../../../../../components/palette/EProjectColor';

export const SettingsScreenResetProgressButtonStyleSheet = StyleSheet.create({
    root: {
        padding: 16,
        paddingLeft: 0,

        // backgroundColor: EProjectColor.PINK,
        // borderRadius: EProjectBorderRadius.DEFAULT,
    },
    text: {
        color: EProjectColor.PINK,
        textAlign: 'left',
        fontWeight: 'bold',
    }
})
