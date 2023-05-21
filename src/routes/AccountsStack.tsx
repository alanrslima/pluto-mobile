import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountsListPage} from '../pages/Accounts/List';
import {AccountsDetailPage} from '../pages/Accounts/Detail';
import {AccountsCreatePage} from '../pages/Accounts/Create';
import {RootStackParamList} from '../types/RootStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AccountsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AccountsListPage" component={AccountsListPage} />
      <Stack.Screen name="AccountsDetailPage" component={AccountsDetailPage} />
      <Stack.Screen name="AccountsCreatePage" component={AccountsCreatePage} />
    </Stack.Navigator>
  );
}
