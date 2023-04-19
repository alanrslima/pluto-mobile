import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AccountsListPage} from '../pages/Accounts/List';
import {AccountsCreatePage} from '../pages/Accounts/Create';
import {AccountsDetailPage} from '../pages/Accounts/Detail';

import {TransactionsListPage} from '../pages/Transactions/List';
import {TransactionsDetailPage} from '../pages/Transactions/Detail';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="AccountsListPage" component={AccountsListPage} />
        <Stack.Screen
          name="AccountsDetailPage"
          component={AccountsDetailPage}
        />
        <Stack.Screen
          name="AccountsCreatePage"
          component={AccountsCreatePage}
        /> */}

        <Stack.Screen
          name="TransactionsListPage"
          component={TransactionsListPage}
        />
        <Stack.Screen
          name="TransactionsDetailPage"
          component={TransactionsDetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
