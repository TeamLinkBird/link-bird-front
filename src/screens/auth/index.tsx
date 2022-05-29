import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  login,
} from '@react-native-seoul/kakao-login';
import axios from 'axios';
import React from 'react';
import { Button, Text, View } from 'react-native';

import DeviceInfo from 'react-native-device-info';

function AuthScreen() {

  const signInWithKakao = async (): Promise<void> => {
    try {
      // console.log("start")
      const token = await login();
      // console.log(token)
      const res = await axios.post('http://10.0.2.2:8080/login/kakao',{
        "access_Token": token.accessToken,
        "refresh_Token": token.refreshToken
      })
      // console.log(res)
      
      // await AsyncStorage.setItem('@access_Token',res.data.access_Token)
      // await AsyncStorage.setItem('@refresh_Token',res.data.refresh_Token)
    } catch (e) {
        console.error(e);
    }
  };

  const signInWithId = async (): Promise<void> => {
    try {
      const deviceId = await DeviceInfo.getAndroidId();
      const res = await axios.post('http://10.0.2.2:8080/login/unsigned',{
          id: deviceId,
        },
      );

      console.log(deviceId)
      console.log(res)

      // await AsyncStorage.setItem('@access_Token',res.data.access_Token)
      // await AsyncStorage.setItem('@refresh_Token',res.data.refresh_Token)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <View>
      <Text>AuthScreen</Text>
      <Text onPress={signInWithKakao}>카카오 로그인</Text>
      {/* <Button
        title="카카오 로그인"
        onPress={signInWithKakao}
      /> */}
      <Text onPress={signInWithId}>기기 로그인</Text>
    </View>
  );
}

export default AuthScreen;
