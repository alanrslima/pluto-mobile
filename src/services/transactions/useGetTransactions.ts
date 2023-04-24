import {useFetch, UseFetchHooks} from '../../hooks/useFetch';
import {TransactionsKeys as Keys} from './stateKeys';
import {Transaction} from '../../types/Transaction';

const processor = (data: Transaction[]) => {
  return data;
};

export const useGetTransactions = (props?: UseFetchHooks) => {
  const {context, params, config} = props || {};
  return useFetch<Transaction[]>({
    key: Keys.list(),
    url: 'transactions',
    params,
    context,
    config,
    processor,
  });
};
