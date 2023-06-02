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
import {useTheme} from '../../../hooks/useTheme';

export function AccountPicker({onSelect, value}: AccountPickerProps) {
  const styles = useStyle(accountPickerStyles);
  const {colors} = useTheme();
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
        hexColor={value ? value?.color : colors.primary}
        title={value ? value.name : 'Selecione uma conta'}
        onPress={showModal}
        type={value ? value.type : ''}
      />
      <ModalAccounts onSelect={onSelectAccount} ref={modalRef} />
    </View>
  );
}
