import {Account} from './Account';
import {Category} from './Category';

export type Transaction = {
  id: string;
  title: string;
  description?: string;
  category: Category;
  value: number;
  account: Account;
  date: Date;
};
