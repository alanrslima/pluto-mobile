import React from 'react';
import {TransactionsList} from '../../../components/templates/TransactionsList';
import {Screen} from '../../../components/templates/Screen';
import {TransactionsListPageProps} from './types';
import {MonthPicker} from '../../../components/molecules/MonthPicker';

export function TransactionsListPage({navigation}: TransactionsListPageProps) {
  function onPressTransaction(transactionId: string) {
    navigation.navigate('TransactionsDetailPage', {transactionId});
  }

  return (
    <Screen header={{title: 'Transações'}}>
      <MonthPicker />
      <TransactionsList onPressTransaction={onPressTransaction} />
    </Screen>
  );
}
