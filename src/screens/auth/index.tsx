import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

function AuthScreen() {
  const navigation = useNavigation();
  console.log(navigation.getState());

  return (
    <View>
      <Text>AuthScreen</Text>
      <Button
        title="login"
        onPress={() => navigation.navigate('MainTabNavigator')}
      />
    </View>
  );
}

export default AuthScreen;
