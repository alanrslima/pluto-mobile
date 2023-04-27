import React, {useRef} from 'react';
import {View} from 'react-native';
import {ModalAccounts} from '../../organisms/ModalAccounts';
import {Account} from '../../../types/Account';
import {AccountPickerProps} from './types';
import {ModalHandle} from '../../templates/Modal/types';
import {Label} from '../../atoms/Label';
import {Card} from '../Card';
import {useStyle} from '../../../hooks/useStyle';
import {accountPickerStyles} from './styles';

export function AccountPicker({onSelect, value}: AccountPickerProps) {
  const styles = useStyle(accountPickerStyles);
  const modalRef = useRef<ModalHandle>(null);

  function showModal() {
    modalRef.current?.show();
  }

  function hideModal() {
    modalRef.current?.hide();
  }

  function onSelectAccount(category: Account) {
    hideModal();
    onSelect(category);
  }

  return (
    <View style={styles.wrapper}>
      <Label>Conta</Label>
      <Card
        hexColor={value ? value?.hexColor : '#555555'}
        title={value ? value.title : 'Selecione uma conta'}
        onPress={showModal}
      />
      <ModalAccounts onSelect={onSelectAccount} ref={modalRef} />
    </View>
  );
}
