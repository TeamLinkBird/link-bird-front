// import messaging from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';
import Navigation from '@/navigation';

function App() {
  useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel(
      {
        channelId: 'link-bird-fcm-channel',
        channelName: 'link-bird-channel',
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
