import {useMutation} from '@tanstack/react-query';
import {api} from '../api';
import {queryClient} from '../queryClient';
import {AuthKeys as Keys} from './stateKeys';
import {ApiResponser} from '../../types/ApiResponser';
import {Token} from '../../types/Token';
import {Credentials} from '../../types/Credentials';
import {session} from '../../lib/session';

export const loginRequest = async (
  params: Credentials,
): Promise<ApiResponser<Token>> => {
  const {data} = await api.post('/v1/auth/login', params);
  return data;
};

export function useLogin() {
  return useMutation(
    async (data: Credentials) => {
      return loginRequest(data);
    },
    {
      retry: false,
      onSuccess: async ({data}: ApiResponser<Token>) => {
        console.log('SUCESSOOOO');
        await session().save(data);
        console.log('DARTA', data);
        // queryClient.setQueryData(Keys.list(), (old: Account[]): Account[] => {
        //   const newSubDriversList = [...(old || []), data];
        //   return newSubDriversList;
        // });
        queryClient.invalidateQueries(Keys.all);
      },
    },
  );
}
