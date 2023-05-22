import {useMutation} from '@tanstack/react-query';
import {api} from '../api';
import {queryClient} from '../queryClient';
import {UserKeys as Keys} from './stateKeys';
import {User} from '../../types/User';
import {ApiResponser} from '../../types/ApiResponser';

export const createUserRequest = async (
  props: Partial<User>,
): Promise<ApiResponser<User>> => {
  const {data} = await api.post('/v1/users', props);
  return data;
};

export function useCreateUser() {
  return useMutation(
    async (data: Partial<User>) => {
      return createUserRequest(data);
    },
    {
      retry: false,
      onSuccess: _ => {
        // queryClient.setQueryData(Keys.list(), (old: Account[]): Account[] => {
        //   const newSubDriversList = [...(old || []), data];
        //   return newSubDriversList;
        // });
        queryClient.invalidateQueries(Keys.all);
      },
    },
  );
}
