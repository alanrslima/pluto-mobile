import React from 'react';
import {AccountsListPage} from '../pages/Accounts/List';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AccountsCreatePage} from '../pages/Accounts/Create';
import {RootStackParamList} from './types';
import {AccountsDetailPage} from '../pages/Accounts/Detail';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AccountsListPage" component={AccountsListPage} />
        <Stack.Screen
          name="AccountsDetailPage"
          component={AccountsDetailPage}
        />
        <Stack.Screen
          name="AccountsCreatePage"
          component={AccountsCreatePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
