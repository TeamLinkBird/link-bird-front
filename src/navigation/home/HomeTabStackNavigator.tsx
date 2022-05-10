import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '@screens/home';

const HomeStack = createNativeStackNavigator();

function HomeTabStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="/home">
      <HomeStack.Screen name="/home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
export default HomeTabStackNavigator;
