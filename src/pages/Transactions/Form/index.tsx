import React from 'react';
import {TransactionForm} from '../../../components/templates/TransactionForm';
import {Screen} from '../../../components/templates/Screen';
import {TransactionsFormPageProps} from './types';

export function TransactionsFormPage({navigation}: TransactionsFormPageProps) {
  return (
    <Screen navigation={navigation}>
      <TransactionForm />
    </Screen>
  );
}
