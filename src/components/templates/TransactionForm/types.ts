import {Transaction} from '../../../types/Transaction';

export type TransactionFormProps = {
  defaultValues?: Partial<Transaction>;
  onSubmit?: (values: {value: number}) => void;
};
