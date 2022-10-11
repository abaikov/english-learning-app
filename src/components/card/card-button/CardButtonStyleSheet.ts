import { StyleSheet } from 'react-native';
import { EProjectBorderRadius } from '../../palette/EProjectBorderRadius';
import { EProjectColor } from '../../palette/EProjectColor';

export const CardButtonStyleSheet = StyleSheet.create({
    root: {
        flex: 1,

        backgroundColor: EProjectColor.FOREGROUND_GRAY,
        borderRadius: EProjectBorderRadius.DEFAULT,
    },
    devider: {
        width: 16
    }
})
