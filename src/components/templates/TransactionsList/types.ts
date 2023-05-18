import {Month} from '../../../types/Month';

export type TransactionsListProps = {
  onPressTransaction: (transactionId: string) => void;
  month?: Month;
};
