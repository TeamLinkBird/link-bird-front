import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BirdScreen from '@/screens/bird';

const BirdStack = createNativeStackNavigator();

function BirdTabStackNavigator() {
  return (
    <BirdStack.Navigator initialRouteName="/bird">
      <BirdStack.Screen name="/bird" component={BirdScreen} />
    </BirdStack.Navigator>
  );
}
export default BirdTabStackNavigator;
