import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '../hooks/useTheme';
import {TransactionsNewPage} from '../pages/Transactions/New';
import {Icon} from '../components/atoms/Icon';
import {HomeFeedPage} from '../pages/Home/Feed';
import {MenuListPage} from '../pages/Menu/List';
import {TransactionsListPage} from '../pages/Transactions/List';
import {AccountsListPage} from '../pages/Accounts/List';

const Tab = createBottomTabNavigator();

function HomeIcon() {
  return <Icon name="chevron-left" color="white" />;
}

function TransactionsIcon() {
  return <Icon name="shuffle" color="white" />;
}

export function TabStack() {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1D1749',
          borderTopColor: colors.whiteA100,
          shadowColor: colors.black,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: HomeIcon,
        }}
        component={HomeFeedPage}
      />
      <Tab.Screen
        name="TransactionsListPage"
        options={{tabBarLabel: 'Transações', tabBarIcon: TransactionsIcon}}
        component={TransactionsListPage}
      />
      <Tab.Screen
        name="TransactionsNewPage"
        component={TransactionsNewPage}
        options={{tabBarLabel: 'Adicionar'}}
      />
      <Tab.Screen
        name="AccountsListPage"
        options={{tabBarLabel: 'Contas'}}
        component={AccountsListPage}
      />
      <Tab.Screen
        name="MenuListPage"
        options={{tabBarLabel: 'Menu'}}
        component={MenuListPage}
      />
    </Tab.Navigator>
  );
}
