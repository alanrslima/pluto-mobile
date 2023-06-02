import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStack';
import {TabStack} from './TabStack';
import {CategoriesListPage} from '../pages/Categories/List';
import {AccountsListPage} from '../pages/Accounts/List';
import {AccountsDetailPage} from '../pages/Accounts/Detail';
import {AccountsCreatePage} from '../pages/Accounts/Create';
import {TransactionsListPage} from '../pages/Transactions/List';
import {TransactionsDetailPage} from '../pages/Transactions/Detail';
import {TransactionsEditPage} from '../pages/Transactions/Edit';
import {CategoriesDetailPage} from '../pages/Categories/Detail';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function PrivateStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabStack} />

      {/* Accounts pages */}
      <Stack.Screen name="AccountsListPage" component={AccountsListPage} />
      <Stack.Screen name="AccountsDetailPage" component={AccountsDetailPage} />
      <Stack.Screen name="AccountsCreatePage" component={AccountsCreatePage} />

      {/* Categories pages */}
      <Stack.Screen name="CategoriesListPage" component={CategoriesListPage} />
      <Stack.Screen
        name="CategoriesDetailPage"
        component={CategoriesDetailPage}
      />

      {/* Transactions pages */}
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
