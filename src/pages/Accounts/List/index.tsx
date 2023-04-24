import React from 'react';
import {AccountsList} from '../../../components/templates/AccountsList';
import {Screen} from '../../../components/templates/Screen';
import {AccountsListPageProps} from './types';

export function AccountsListPage({navigation}: AccountsListPageProps) {
  function onPressAddAccount() {
    navigation.navigate('AccountsCreatePage');
  }

  function onPressAccount(accountId: string) {
    navigation.navigate('AccountsDetailPage', {accountId});
  }

  return (
    <Screen
      navigation={navigation}
      header={{
        title: 'Carteira',
        rightButtons: [{name: 'plus', onPress: onPressAddAccount}],
      }}>
      <AccountsList onPressAccount={onPressAccount} />
    </Screen>
  );
}
