import {useFetch, UseFetchHooks} from '../../hooks/useFetch';
import {AccountsKeys as Keys} from './stateKeys';
import {Account} from '../../types/Account';

const processor = (data: Account[]) => {
  return data;
};

export const useGetAccounts = (props?: UseFetchHooks) => {
  const {context, params, config} = props || {};
  return useFetch<Account[]>({
    key: Keys.list(),
    url: 'accounts',
    params,
    context,
    config,
    processor,
  });
};
