// import messaging from '@react-native-firebase/messaging';
import { createNavigationContainerRef } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import PushNotification from 'react-native-push-notification';
import ShareMenu from 'react-native-share-menu';
import Navigation from '@/navigation';

export const navigationRef = createNavigationContainerRef();

function App() {
  const [sharedData, setSharedData] = useState('');
  const [sharedMimeType, setSharedMimeType] = useState('');
  const [sharedExtraData, setSharedExtraData] = useState(null);

  const isOpenedByShare = !!sharedData || !!sharedMimeType || !!sharedExtraData;

  LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

  const handleShare = useCallback((item) => {
    if (!item) {
      return;
    }

    const { mimeType, data, extraData } = item;

    setSharedData(data);
    setSharedExtraData(extraData);
    setSharedMimeType(mimeType);
  }, []);

  useEffect(() => {
    const createChannels = () => {
      PushNotification.createChannel({
        channelId: 'link-bird-fcm-channel',
        channelName: 'link-bird-channel',
      });
    };

    createChannels();
  }, []);

  useEffect(() => {
    ShareMenu.getInitialShare(handleShare);
  }, []);

  useEffect(() => {
    if (isOpenedByShare) {
      console.log('opened by share!');
      navigationRef.current?.navigate('MainTabNavigator', {
        screen: '/',
        params: {
          screen: '/share',
          params: {
            sharedData,
          },
        },
      });
    }
  }, [isOpenedByShare]);

  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <>
      <Navigation ref={navigationRef} />
    </>
  );
}

export default App;
