import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransactionsListPage} from '../pages/Transactions/List';
import {TransactionsDetailPage} from '../pages/Transactions/Detail';
import {TransactionsEditPage} from '../pages/Transactions/Edit';
import {RootStackParamList} from '.';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function TransactionsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="TransactionsListPage"
        component={TransactionsListPage}
      />
      <Stack.Screen
        name="TransactionsDetailPage"
        component={TransactionsDetailPage}
      />
      <Stack.Screen
        name="TransactionsEditPage"
        component={TransactionsEditPage}
      />
    </Stack.Navigator>
  );
}
