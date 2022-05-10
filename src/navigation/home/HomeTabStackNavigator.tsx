import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ShareScreen from '@/screens/share';
import HomeScreen from '@screens/home';

const HomeStack = createNativeStackNavigator();

function HomeTabStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="/home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="/home" component={HomeScreen} />
      <HomeStack.Screen name="/share" component={ShareScreen} />
    </HomeStack.Navigator>
  );
}
export default HomeTabStackNavigator;
