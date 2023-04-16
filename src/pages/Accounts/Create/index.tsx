import React from 'react';
import {Button} from '../../../components/atoms/Button';
import {Screen} from '../../../components/templates/Screen';
import {AccountsCreatePageProps} from './types';

export function AccountsCreatePage({navigation}: AccountsCreatePageProps) {
  return (
    <Screen header={{title: 'Nova conta'}} navigation={navigation}>
      <Button />
    </Screen>
  );
}
