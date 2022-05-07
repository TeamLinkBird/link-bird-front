import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import HomeTabStackNavigator from './home/HomeTabStackNavigator';
import SettingsTabStackNavigator from './settings/SettingsTabStackNavigator';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="/" component={HomeTabStackNavigator} />
      <Tab.Screen name="/settings" component={SettingsTabStackNavigator} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
