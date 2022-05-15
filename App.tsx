import {
  getProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const androidKeys = {
  kConsumerKey: 'ReQM2zKSDaSCjdUKLmCj',
  kConsumerSecret: 'vQnTQuoaWa',
  kServiceAppName: '링크버드',
};

const App = () => {
  const [Id, setId] = useState('');
  const [result, setResult] = useState<
    string | undefined | GetProfileResponse
  >();
  const [out, setOut] = useState<string>();
  const [naverToken, setNaverToken] = React.useState<
    TokenResponse | undefined | null | string
  >(null);

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();

      setResult(JSON.stringify(token));
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

    setOut(message);
  };

  const getKakaoProfile = async (): Promise<void> => {
    const profile = await getProfile();

    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();

    setResult(message);
  };
  return (
    <View>
      <Text>{result}</Text>
      <Text>{out}</Text>
      <Text onPress={() => signInWithKakao()}>카카오 로그인</Text>
      <Text onPress={() => signOutWithKakao()}>카카오 로그아웃</Text>
      <Text onPress={() => getKakaoProfile()}>카카오 프로필 얻기</Text>
      <Text
        onPress={async () => {
          // Linking.openURL(
          //   'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=21c4f169dfe1f67c019d92b1efc917c7&redirect_uri=http://ssd018.synology.me/login/kakao'
          // );
          const res = await axios.get(
            'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=21c4f169dfe1f67c019d92b1efc917c7&redirect_uri=http://ssd018.synology.me/login/kakao'
          );
          setResult(JSON.stringify(res));
        }}
      >
        서버로 로그인
      </Text>
      <Text
        onPress={async () => {
          const deviceId = await DeviceInfo.getAndroidId();
          setId(deviceId);
        }}
      >
        기기 ID 불러오기
      </Text>
      <Text
        onPress={async () => {
          try {
            const json = await axios({
              url: 'http://sbbro.sytes.net:80/login/unsigned',
              method: 'get',
              data: {
                id: Id,
              },
            });
          } catch (e) {
            setResult(e?.message);
          }
        }}
      >
        기기로그인
      </Text>
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
