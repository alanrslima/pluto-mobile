import React, {useState} from 'react';
import {TransactionsList} from '../../../components/templates/TransactionsList';
import {Screen} from '../../../components/templates/Screen';
import {TransactionsListPageProps} from './types';
import {MonthPicker} from '../../../components/molecules/MonthPicker';
import {Month} from '../../../types/Month';

export function TransactionsListPage({navigation}: TransactionsListPageProps) {
  const [month, setMonth] = useState<Month>();

  function onPressTransaction(transactionId: string) {
    navigation.navigate('TransactionsDetailPage', {transactionId});
  }

  function onChangeMonth(value: Month) {
    setMonth(value);
  }

  return (
    <Screen header={{title: 'Transações'}}>
      <MonthPicker onChange={onChangeMonth} />
      <TransactionsList month={month} onPressTransaction={onPressTransaction} />
    </Screen>
  );
}
