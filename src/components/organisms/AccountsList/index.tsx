import React from 'react';
import {ScrollView, View} from 'react-native';
import {Card} from '../../molecules/Card';
import {useStyle} from '../../../hooks/useStyle';
import {accountsListStyles} from './styles';
import {SectionHeader} from '../../atoms/SectionHeader';

export function AccountsList() {
  const styles = useStyle(accountsListStyles);

  const accounts = [1, 2, 3, 4, 5, 6];

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <SectionHeader title="Contas" />
      {accounts.map(account => (
        <View key={account} style={styles.wrapperCard}>
          <Card />
        </View>
      ))}
    </ScrollView>
  );
}
