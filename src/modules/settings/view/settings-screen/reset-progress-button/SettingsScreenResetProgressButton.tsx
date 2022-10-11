import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SettingsScreenResetProgressButtonStyleSheet } from './SettingsScreenResetProgressButtonStyleSheet';

export const SettingsScreenResetProgressButton = ({ onPress }: { onPress: () => void }) => {
    return <TouchableOpacity 
        style={SettingsScreenResetProgressButtonStyleSheet.root}
        onPress={onPress}
    >
        <Text style={SettingsScreenResetProgressButtonStyleSheet.text}>
            RESET PROGRESS
        </Text>
    </TouchableOpacity>
}
