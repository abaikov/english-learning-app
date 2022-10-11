import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../../../../components/palette/EProjectColor';

export const WordStageViewStyleSheet = StyleSheet.create({
    root: {
        
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
    },
    headerItem: {
        flex: 1,
    },
    text: {
        color: EProjectColor.WHITE,
        fontSize: 14,
    },
    textBold: {
        fontWeight: 'bold',
    },
    textGray: {
        color: EProjectColor.BORDER_GRAY,
    }
})
