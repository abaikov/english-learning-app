import { StyleSheet } from 'react-native'
import { EProjectBorderRadius } from '../../palette/EProjectBorderRadius'
import { EProjectColor } from '../../palette/EProjectColor'

export const CardContentWrapStyleSheet = StyleSheet.create({
    root: {
        position: 'relative',

        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,

        // paddingTop: 32,
        // paddingRight: 32,
        // paddingBottom: 32,
        // paddingLeft: 32,

        borderRadius: EProjectBorderRadius.DEFAULT,

        backgroundColor: EProjectColor.FOREGROUND_GRAY,
    }
})
