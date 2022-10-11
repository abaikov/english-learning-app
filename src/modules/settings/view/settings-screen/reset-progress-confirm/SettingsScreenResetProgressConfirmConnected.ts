import { connect } from 'react-redux';
import { ConfirmPopup } from '../../../../../components/confirm/ConfirmPopup';
import { IStoreState } from '../../../../../redux/type/IStoreState';
import { ESettingsState } from '../../../type/ESettingsState';
import { SettingsScreenResetProgressConfirmAcceptedAction } from './action/SettingsScreenResetProgressConfirmAcceptedAction';
import { SettingsScreenResetProgressConfirmDeclinedAction } from './action/SettingsScreenResetProgressConfirmDeclinedAction';

export const SettingsScreenResetProgressConfrimConnected = connect(
    (state: IStoreState) => {
        return {
            shown: state.settings.state == ESettingsState.RESET_PROGRESS_CONFIRM,
            text: 'Are you sure you want to reset progress?',
        }
    },
    (dispatch) => {
        return {
            onResult: (isAccepted) => {
                if (isAccepted) {
                    dispatch(SettingsScreenResetProgressConfirmAcceptedAction());
                } else {
                    dispatch(SettingsScreenResetProgressConfirmDeclinedAction());
                }
            }
        }
    }
)(ConfirmPopup);
