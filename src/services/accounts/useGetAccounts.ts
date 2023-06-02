import {useFetch, UseFetchHooks} from '../../hooks/useFetch';
import {AccountsKeys as Keys} from './stateKeys';
import {Account} from '../../types/Account';
import {ApiResponser} from '../../types/ApiResponser';
import {DataProps} from '../../types/Data';

const processor = (data: ApiResponser<DataProps<Account[]>>): Account[] => {
  return data.data.rows;
};

export const useGetAccounts = (props?: UseFetchHooks) => {
  const {context, params, config} = props || {};
  return useFetch<Account[]>({
    key: Keys.list(),
    url: '/v1/accounts',
    params,
    context,
    config,
    processor,
  });
};
