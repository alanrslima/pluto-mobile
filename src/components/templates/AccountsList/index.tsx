import React from 'react';
import {FlatList, View} from 'react-native';
import {Card} from '../../molecules/Card';
import {useStyle} from '../../../hooks/useStyle';
import {accountsListStyles} from './styles';
import {AccountsListProps} from './types';
import {useGetAccounts} from '../../../services/accounts/useGetAccounts';

export function AccountsList({onPressAccount}: AccountsListProps) {
  const styles = useStyle(accountsListStyles);

  const {data} = useGetAccounts();

  return (
    <FlatList
      contentContainerStyle={styles.wrapper}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.wrapperCard}>
          <Card
            onPress={() => onPressAccount(item)}
            hexColor={item.color}
            title={item.name}
            value={item.value}
            type="Conta corrente"
          />
        </View>
      )}
    />
  );
}
