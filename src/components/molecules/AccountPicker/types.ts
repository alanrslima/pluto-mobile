import {Account} from '../../../types/Account';
import {ModalAccountsProps} from '../../organisms/ModalAccounts/types';

export type AccountPickerProps = ModalAccountsProps & {
  value?: Account;
};
