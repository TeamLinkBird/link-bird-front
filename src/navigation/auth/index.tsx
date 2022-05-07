import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from 'react-native';
import AuthScreen from '@/screens/auth';

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <>
      <AuthStack.Navigator initialRouteName="/auth">
        <AuthStack.Screen name="/auth" component={AuthScreen} />
      </AuthStack.Navigator>
    </>
  );
}

export default AuthStackNavigator;
