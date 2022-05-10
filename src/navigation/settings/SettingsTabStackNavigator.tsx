import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SettingsScreen from '@/screens/settings';

const SettingsStack = createNativeStackNavigator();

function SettingsTabStackNavigator() {
  return (
    <SettingsStack.Navigator initialRouteName="/settings">
      <SettingsStack.Screen name="/settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
export default SettingsTabStackNavigator;
