import {useMutation} from '@tanstack/react-query';
import {api} from '../api';
import {queryClient} from '../queryClient';
import {AccountsKeys as Keys} from './stateKeys';
import {Account} from '../../types/Account';

export const createAccountRequest = async (data: Account): Promise<Account> => {
  await api.post('/account', data);
  return data;
};

export function useCreateSubDriver() {
  return useMutation(
    async (data: Account) => {
      return createAccountRequest(data);
    },
    {
      retry: false,
      onSuccess: data => {
        // queryClient.setQueryData(Keys.list(), (old: Account[]): Account[] => {
        //   const newSubDriversList = [...(old || []), data];
        //   return newSubDriversList;
        // });
        queryClient.invalidateQueries(Keys.all);
      },
    },
  );
}
