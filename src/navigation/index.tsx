import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createRef, forwardRef, useState } from 'react';
import { View, Text } from 'react-native';
import MainTabNavigator from './MainTabNavigator';
import AuthStackNavigator from './auth';

const RootStack = createNativeStackNavigator();

function Navigation(props, ref) {
  return (
    <>
      <NavigationContainer ref={ref}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name="AuthStackNavigator"
            component={AuthStackNavigator}
          />
          <RootStack.Screen
            name="MainTabNavigator"
            component={MainTabNavigator}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default forwardRef(Navigation);
