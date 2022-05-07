import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createRef, useState } from 'react';
import { View, Text } from 'react-native';
import MainTabNavigator from './MainTabNavigator';
import AuthStackNavigator from './auth';

const RootStack = createNativeStackNavigator();
const navigationRef = createRef();

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    console.log('login');
  };

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator>
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

export default Navigation;
