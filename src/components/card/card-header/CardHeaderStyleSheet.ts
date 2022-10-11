import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';

export const CardHeaderStyleSheet = StyleSheet.create({
    root: {
        paddingTop: 16,
        paddingBottom: 16,

        // borderBottomWidth: 1,
        borderBottomColor: EProjectColor.BORDER_GRAY,
        backgroundColor: EProjectColor.BACKGROUND_LIGHT_GRAY,
    },
    title: {
        paddingBottom: 2,

        color: EProjectColor.PINK,

        textAlign: 'center',

        fontWeight: 'bold',
        fontSize: 14,
    },
    subtitle: {
        color: EProjectColor.BLUE,
        textAlign: 'center',
        fontSize: 12,
    }
})
