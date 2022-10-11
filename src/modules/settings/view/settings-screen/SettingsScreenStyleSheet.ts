import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../../../components/palette/EProjectColor';

export const SettingsScreenStyleSheet = StyleSheet.create({
    root: {
        flex: 1,
    },
    content: {
        padding: 16,
    },
    titleText: {
        color: EProjectColor.WHITE,
        fontSize: 24,
        fontWeight: 'bold',
    },
    ordinaryText: {
        color: EProjectColor.WHITE,
        fontSize: 14,
    },
    block: {
        paddingTop: 8,
        // paddingRight: 16,
        paddingBottom: 8,
        // paddingLeft: 16,
    }
})
