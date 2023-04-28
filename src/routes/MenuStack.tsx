import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MenuListPage} from '../pages/Menu/List';
import {RootStackParamList} from '.';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuListPage" component={MenuListPage} />
    </Stack.Navigator>
  );
}
