import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BirdTabStackNavigator from './bird/BirdTabStackNavigator';

import HomeTabStackNavigator from './home/HomeTabStackNavigator';
import SearchTabStackNavigator from './search/SearchTabStackNavigator';
import SettingsTabStackNavigator from './settings/SettingsTabStackNavigator';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTabStackNavigator"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeTabStackNavigator"
        component={HomeTabStackNavigator}
      />
      <Tab.Screen
        name="SearchTabStackNavigator"
        component={SearchTabStackNavigator}
      />
      <Tab.Screen
        name="BirdTabStackNavigator"
        component={BirdTabStackNavigator}
      />
      <Tab.Screen
        name="SettingsTabStackNavigator"
        component={SettingsTabStackNavigator}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
