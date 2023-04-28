import React from 'react';
import {TransactionForm} from '../../../components/templates/TransactionForm';
import {Screen} from '../../../components/templates/Screen';
import {TransactionsEditPageProps} from './types';

export function TransactionsEditPage({navigation}: TransactionsEditPageProps) {
  return (
    <Screen header={{title: 'Transação'}} navigation={navigation}>
      <TransactionForm
        defaultValues={{
          title: 'Teste',
          account: {
            hexColor: '#9C44DC',
            id: '1',
            title: 'NuBank',
            value: 100,
            type: 'Conta corrente',
          },
          category: {id: '1', name: 'Saúde'},
          date: new Date(),
          description: 'Teste',
          id: '123',
          value: 1000,
        }}
      />
    </Screen>
  );
}
