import { StyleSheet } from 'react-native'
import { EProjectColor } from '../../palette/EProjectColor'
import { ECardSize } from '../type/ECardSize'

export const CardScrollerStyleSheet = StyleSheet.create({
    root: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,

        paddingTop: 16,
        paddingRight: 32,
        paddingBottom: 16 + ECardSize.BOTTOM_BUTTONS_HEIGHT,
        paddingLeft: 32,
        backgroundColor: EProjectColor.BACKGROUND_LIGHT_GRAY
    }
})
