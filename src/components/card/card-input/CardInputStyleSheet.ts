import { StyleSheet } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';

export const CardInputStyleSheet = StyleSheet.create({
    input: {
        padding: 16,

        color: EProjectColor.WHITE,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
        
        textAlign: 'center',
        textDecorationLine: 'none',
        textDecorationColor: 'transparent',
        
        fontSize: 28,
    }
})
