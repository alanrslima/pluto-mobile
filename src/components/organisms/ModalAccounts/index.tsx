import React, {forwardRef} from 'react';
import {ModalAccountsHandle, ModalAccountsProps} from './types';
import {Modal} from '../../templates/Modal';
import {FlatList, View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {modalCardsStyles} from './styles';
import {Account} from '../../../types/Account';
import {Card} from '../../molecules/Card';

export const ModalAccounts = forwardRef<
  ModalAccountsHandle,
  ModalAccountsProps
>(({onSelect}, ref) => {
  const styles = useStyle(modalCardsStyles);
  const cards: Account[] = [
    {id: '1', title: 'NuBank', hexColor: '#9C44DC', value: 100},
    {id: '2', title: 'C6', hexColor: '#222222', value: 100},
  ];

  function onPressItem(account: Account) {
    onSelect(account);
  }

  return (
    <Modal ref={ref} title="Contas">
      <FlatList
        contentContainerStyle={styles.container}
        data={cards}
        renderItem={({item}) => (
          <View style={styles.wrapperItem}>
            <Card
              title={item.title}
              onPress={() => onPressItem(item)}
              hexColor={item.hexColor}
              type="Conta corrente"
            />
          </View>
        )}
        keyExtractor={item => `${item.id}`}
      />
    </Modal>
  );
});
