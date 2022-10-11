import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ScreenStyleSheet } from '../../../../components/screen/ScreenStyleSheet';
import { SettingsScreenResetProgressButtonConnected } from './reset-progress-button/SettingsScreenResetProgressButtonConnected';
import { SettingsScreenResetProgressConfrimConnected } from './reset-progress-confirm/SettingsScreenResetProgressConfirmConnected';
import { SettingsScreenStyleSheet } from './SettingsScreenStyleSheet';
import { WordsProgressStatsConnect } from './words-progress-stats/WordsProgressStatsConnect';
import VersionInfo from 'react-native-version-info';
import { CardGuide } from './card-guide/CardGuide';
import { WordStageViewListConnected } from './word-stage-view-list/WordStageViewListConnected';

export const SettingsScreen = () => {
    return <ScrollView 
        style={[
            ScreenStyleSheet.root, 
            SettingsScreenStyleSheet.root
        ]}
    >
        <View style={SettingsScreenStyleSheet.content}>
            {/* {__DEV__
                ? <View>
                    <View>
                        <Text style={SettingsScreenStyleSheet.titleText}>
                            Dev mode
                        </Text>
                    </View>
                    <View style={SettingsScreenStyleSheet.block}>
                        <Text style={SettingsScreenStyleSheet.ordinaryText}>
                            Enabled
                        </Text>
                    </View>
                </View>
                : undefined
            } */}
            <View>
                <View>
                    <Text style={SettingsScreenStyleSheet.titleText}>
                        Repetition schedule
                    </Text>
                </View>
                <View style={SettingsScreenStyleSheet.block}>
                    <WordStageViewListConnected />
                </View>
            </View>
            <View>
                <View>
                    <Text style={SettingsScreenStyleSheet.titleText}>
                        Stats
                    </Text>
                </View>
                <View style={SettingsScreenStyleSheet.block}>
                    <WordsProgressStatsConnect />
                    <SettingsScreenResetProgressButtonConnected/>
                </View>
            </View>
            <View>
                <View>
                    <Text style={SettingsScreenStyleSheet.titleText}>
                        Guide
                    </Text>
                </View>
                <View style={SettingsScreenStyleSheet.block}>
                    <CardGuide/>
                </View>
            </View>
            <View>
                <View>
                    <Text style={SettingsScreenStyleSheet.titleText}>
                        About
                    </Text>
                </View>
                <View style={SettingsScreenStyleSheet.block}>
                    <Text style={SettingsScreenStyleSheet.ordinaryText}>
                        Shot-A-Word 2022
                    </Text>
                    {/* <Text style={SettingsScreenStyleSheet.ordinaryText}>
                        Version: {VersionInfo.appVersion}
                    </Text> */}
                </View>
            </View>
            <SettingsScreenResetProgressConfrimConnected />
        </View>
    </ScrollView>
}
