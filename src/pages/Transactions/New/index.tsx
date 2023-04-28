import React from 'react';
import {TransactionForm} from '../../../components/templates/TransactionForm';
import {Screen} from '../../../components/templates/Screen';

export function TransactionsNewPage() {
  return (
    <Screen header={{title: 'Transação'}}>
      <TransactionForm />
    </Screen>
  );
}
