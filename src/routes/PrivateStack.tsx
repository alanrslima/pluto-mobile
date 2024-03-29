import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TransactionsStack} from './TransactionsStack';
import {AccountsStack} from './AccountsStack';
import {useTheme} from '../hooks/useTheme';
import {MenuStack} from './MenuStack';
import {TransactionsNewPage} from '../pages/Transactions/New';
import {Icon} from '../components/atoms/Icon';
import {HomeFeedPage} from '../pages/Home/Feed';

const Tab = createBottomTabNavigator();

function HomeIcon() {
  return <Icon name="chevron-left" color="white" />;
}

function TransactionsIcon() {
  return <Icon name="shuffle" color="white" />;
}

export function PrivateStack() {
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
        name="Transactions"
        options={{tabBarLabel: 'Transações', tabBarIcon: TransactionsIcon}}
        component={TransactionsStack}
      />
      <Tab.Screen
        name="TransactionsNewPage"
        component={TransactionsNewPage}
        options={{tabBarLabel: 'Adicionar'}}
      />
      <Tab.Screen
        name="Accounts"
        options={{tabBarLabel: 'Contas'}}
        component={AccountsStack}
      />
      <Tab.Screen
        name="Menu"
        options={{tabBarLabel: 'Menu'}}
        component={MenuStack}
      />
    </Tab.Navigator>
  );
}
