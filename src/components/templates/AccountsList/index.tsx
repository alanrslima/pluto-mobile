import React from 'react';
import {ScrollView, View} from 'react-native';
import {Card} from '../../molecules/Card';
import {useStyle} from '../../../hooks/useStyle';
import {accountsListStyles} from './styles';
import {SectionHeader} from '../../atoms/SectionHeader';
import {Account} from '../../../types/Account';
import {AccountsListProps} from './types';

export function AccountsList({onPressAccount}: AccountsListProps) {
  const styles = useStyle(accountsListStyles);

  const accounts: Account[] = [
    {
      id: '1',
      hexColor: '#9C44DC',
      title: 'NuBank',
      value: 120000.76,
    },
    {
      id: '2',
      hexColor: '#FF7A00',
      title: 'Inter',
      value: 265.2,
    },
    {
      id: '3',
      hexColor: '#3760ED',
      title: 'Banco PAN',
      value: 6770.3,
    },
    {
      id: '4',
      hexColor: '#023B44',
      title: 'Sicoob',
      value: 6770.3,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <SectionHeader title="Contas" />
      {accounts.map(account => (
        <View key={account.id} style={styles.wrapperCard}>
          <Card
            onPress={() => onPressAccount(account.id)}
            hexColor={account.hexColor}
            title={account.title}
            value={account.value}
            type="Conta corrente"
          />
        </View>
      ))}
    </ScrollView>
  );
}
