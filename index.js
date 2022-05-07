/**
 * @format
 */

// import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './App';
import { name as appName } from './app.json';

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  // // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  // onAction: function (notification) {
  //   console.log('ACTION:', notification.action);
  //   console.log('NOTIFICATION:', notification);

  //   // process the action
  // },
});

AppRegistry.registerComponent(appName, () => App);
