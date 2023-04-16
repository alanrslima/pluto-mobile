import React from 'react';
import {AccountsList} from '../../components/organisms/AccountsList';
import {Screen} from '../../components/templates/Screen';

export function Accounts() {
  return (
    <Screen
      header={{
        title: 'Carteira',
        rightButtons: [{name: 'plus'}],
      }}>
      <AccountsList />
    </Screen>
  );
}
