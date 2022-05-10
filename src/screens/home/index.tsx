import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

function HomeScreen() {
  const navigation = useNavigation();

  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'link-bird-fcm-channel',
      title: 'hello!',
      message: 'hello world~!',
    });

    // console.log(new Date(Date.now() + 5 * 1000));

    PushNotification.localNotificationSchedule({
      channelId: 'link-bird-fcm-channel',
      title: 'hello!',
      message: 'hello world~!',
      date: new Date(Date.now() + 20 * 1000),
      allowWhileIdle: true,
    });
  };
  const navigateToShareScreen = useCallback(() => {
    navigation.navigate('/share');
  }, []);

  useEffect(() => {
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1']
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="click me" onPress={handleNotification} />
      <Button title="share" onPress={navigateToShareScreen} />
    </View>
  );
}
export default HomeScreen;
