import React, {forwardRef} from 'react';
import {ModalAccountsHandle, ModalAccountsProps} from './types';
import {Modal} from '../../templates/Modal';

import {Account} from '../../../types/Account';
import {AccountsList} from '../../templates/AccountsList';

export const ModalAccounts = forwardRef<
  ModalAccountsHandle,
  ModalAccountsProps
>(({onSelect}, ref) => {
  function onPressItem(account: Account) {
    onSelect(account);
  }

  return (
    <Modal ref={ref} title="Contas">
      <AccountsList onPressAccount={onPressItem} />
    </Modal>
  );
});
