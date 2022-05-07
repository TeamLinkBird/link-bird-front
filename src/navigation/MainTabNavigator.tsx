import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import HomeTabStackNavigator from './home';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="/" component={HomeTabStackNavigator} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
