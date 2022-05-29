import {
  getProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import axios from 'axios';
import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const App = () => {
  const [Id, setId] = useState('');
  const [result, setResult] = useState<
    string | undefined | GetProfileResponse
  >();
  const [out, setOut] = useState<string>();
  const [access,setAccess] = useState<string>();
  const [referesh,setReferesh] = useState<string>();
  const [kakaoAccess,setKaKaoAccess] = useState<string>();

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();

      const res = await axios.post('http://10.0.2.2:8080/login/kakao',{
        "access_Token": token.accessToken,
        "refresh_Token": token.refreshToken
      })

      setResult(JSON.stringify(res.data))
      setAccess(res.data.access_Token)
      setReferesh(res.data.refresh_Token)
      setKaKaoAccess(token.accessToken)

    } catch (e) {
      if (e instanceof Error) {
        setResult(JSON.stringify(e.message));
      } else {
        setResult(JSON.stringify(e));
      }
    }
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();
    const config = {
      headers: { Authorization: `Bearer ${access}` }
    };
    const res = await axios.post('http://10.0.2.2:8080/logout',null,config)

    setResult(res)
  };

  const signInWithId = async (): Promise<void> => {
    const deviceId = await DeviceInfo.getAndroidId();
    setId(deviceId);

    try {
      const json = await axios.post('http://10.0.2.2:8080/login/unsigned',{
          id: deviceId,
        },
      );

      setResult(JSON.stringify(json.data))
      setAccess(json.data.access_Token)
      setReferesh(json.data.refresh_Token)
    } catch (e) {
      setResult(e?.message);
    }
  }

  const refresh = async(): Promise<void> => {
    const res = await axios.post("http://10.0.2.2:8080/refresh_Token",{
      refresh_Token: referesh
    })

    setResult(JSON.stringify(res.data))
  }

  return (
    <View>
      <Text>{result}</Text>
      <Text>{out}</Text>
      <Text>{kakaoAccess}/</Text>
      <Text onPress={() => signInWithKakao()}>카카오 로그인</Text>
      <Text onPress={() => signOutWithKakao()}>카카오 로그아웃</Text>
      <Text
        onPress={() => signInWithId()}
      >
        기기 로그인
      </Text>
      <Text>기기로그아웃</Text>
      <Text onPress={() => refresh()}>토큰 갱신</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default App;
