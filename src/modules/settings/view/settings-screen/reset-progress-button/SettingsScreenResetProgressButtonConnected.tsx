import { connect } from 'react-redux';
import { SettingsScreenResetProgressButtonPressedAction } from './action/SettingsScreenResetProgressButtonPressedAction';
import { SettingsScreenResetProgressButton } from './SettingsScreenResetProgressButton';

export const SettingsScreenResetProgressButtonConnected = connect(
    null,
    (dispatch) => {
        return {
            onPress: () => {
                dispatch(SettingsScreenResetProgressButtonPressedAction())
            }
        }
    }
)(
    SettingsScreenResetProgressButton
)
