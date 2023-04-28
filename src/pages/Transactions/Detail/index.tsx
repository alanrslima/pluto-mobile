import React from 'react';
import {Screen} from '../../../components/templates/Screen';
import {TransactionsDetailPageProps} from './types';
import {TransactionDetail} from '../../../components/templates/TransactionDetail';

export function TransactionsDetailPage({
  navigation,
}: TransactionsDetailPageProps) {
  return (
    <Screen
      navigation={navigation}
      header={{
        rightButtons: [
          {
            name: 'edit-2',
            onPress: () =>
              navigation.navigate('TransactionsEditPage', {
                transactionId: '13',
              }),
          },
        ],
      }}>
      <TransactionDetail />
    </Screen>
  );
}
