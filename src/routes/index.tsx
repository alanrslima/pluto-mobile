import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TransactionsStack} from './TransactionsStack';
import {AccountsStack} from './AccountsStack';
import {useTheme} from '../hooks/useTheme';
import {MenuStack} from './MenuStack';

const Tab = createBottomTabNavigator();

export default function Routes() {
  const {colors} = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1D1749',
            borderTopColor: colors.whiteA100,
            shadowColor: colors.black,
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.7,
            shadowRadius: 10,
          },
        }}>
        <Tab.Screen name="Transactions" component={TransactionsStack} />
        <Tab.Screen name="Accounts" component={AccountsStack} />
        <Tab.Screen name="Menu" component={MenuStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
