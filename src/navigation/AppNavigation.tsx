import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native';
import { EProjectColor } from '../components/palette/EProjectColor';
import { SettingsScreen } from '../modules/settings/view/settings-screen/SettingsScreen';
import { WordScreenConnected } from '../modules/word/view/word-screen/WordScreenConnected';
const LearnIcon = require('./icon/learn/saw_learn.png');
const ProfileIcon = require('./icon/profile/saw_profile.png');

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // tabBarActiveTintColor: EProjectColor.PINK,
                tabBarStyle: {
                    backgroundColor: EProjectColor.FOREGROUND_GRAY,
                    borderTopColor: EProjectColor.FOREGROUND_GRAY, 
                    elevation: 0,
                },
                
                headerTintColor: EProjectColor.WHITE,
                headerStyle: { 
                    backgroundColor: EProjectColor.FOREGROUND_GRAY,
                    borderBottomColor: EProjectColor.FOREGROUND_GRAY,
                    shadowColor: EProjectColor.FOREGROUND_GRAY,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let source = LearnIcon;

                    if (route.name === 'Words') {
                        source = LearnIcon;
                    } else if (route.name === 'Profile') {
                        source = ProfileIcon;
                    }

                    return <Image
                        source={source}
                        style={{
                            opacity: focused
                                ? 1
                                : 0.3,
                            width: size,
                            height: size,
                        }}
                    />;
                },
                tabBarActiveTintColor: 'rgba(255,255,255,1)',
                tabBarInactiveTintColor: 'rgba(255,255,255,0.3)',
            })}
        >
            <Tab.Screen name='Words' component={WordScreenConnected}  />
            <Tab.Screen name='Profile' component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}
