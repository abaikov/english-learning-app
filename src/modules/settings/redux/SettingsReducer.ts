import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { ESettingsState } from '../type/ESettingsState';
import { ISettings } from '../type/ISettings';
import { SettingsScreenResetProgressButtonPressedAction } from '../view/settings-screen/reset-progress-button/action/SettingsScreenResetProgressButtonPressedAction';
import { SettingsScreenResetProgressConfirmAcceptedAction } from '../view/settings-screen/reset-progress-confirm/action/SettingsScreenResetProgressConfirmAcceptedAction';
import { SettingsScreenResetProgressConfirmDeclinedAction } from '../view/settings-screen/reset-progress-confirm/action/SettingsScreenResetProgressConfirmDeclinedAction';

export const SettingsReducer = createReducer<ISettings>({
    state: ESettingsState.IDLE,
}, (builder) => {
    builder
        .addCase(SettingsScreenResetProgressButtonPressedAction, (state, action) => {
            state.state = ESettingsState.RESET_PROGRESS_CONFIRM;
        })
        .addMatcher(
            isAnyOf(
                SettingsScreenResetProgressConfirmDeclinedAction,
                SettingsScreenResetProgressConfirmAcceptedAction
            ),
            (state, action) => {
                state.state = ESettingsState.IDLE;
            }
        )
})
