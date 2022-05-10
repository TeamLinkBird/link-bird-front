import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SearchScreen from '@/screens/search';

const SearchStack = createNativeStackNavigator();

function SearchTabStackNavigator() {
  return (
    <SearchStack.Navigator initialRouteName="/search">
      <SearchStack.Screen name="/search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}
export default SearchTabStackNavigator;
