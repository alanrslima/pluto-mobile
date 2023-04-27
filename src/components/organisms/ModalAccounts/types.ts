import {Account} from '../../../types/Account';
import {ModalHandle} from '../../templates/Modal/types';

export type ModalAccountsProps = {
  onSelect: (account: Account) => void;
};

export type ModalAccountsHandle = ModalHandle;
