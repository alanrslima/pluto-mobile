import {useFetch, UseFetchHooks} from '../../hooks/useFetch';
import {AuthKeys as Keys} from './stateKeys';
import {ApiResponser} from '../../types/ApiResponser';
import {User} from '../../types/User';

const processor = (data: ApiResponser<User>): User => {
  return data.data;
};

export const useGetUserSession = (props?: UseFetchHooks) => {
  const {context, params, config} = props || {};
  return useFetch<User>({
    key: Keys.list(),
    url: 'v1/users/me',
    params,
    context,
    config,
    processor,
  });
};
