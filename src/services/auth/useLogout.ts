import {useMutation} from '@tanstack/react-query';
import {queryClient} from '../queryClient';
import {AuthKeys as Keys} from './stateKeys';
import {session} from '../../lib/session';

export const loginRequest = async (): Promise<boolean> => {
  //   const {data} = await api.post('/v1/auth/login', params);
  //   return data;
  return true;
};

export function useLogout() {
  return useMutation(
    async () => {
      return loginRequest();
    },
    {
      retry: false,
      onSuccess: async _ => {
        await session().clean();
        queryClient.setQueryData(Keys.list(), () => {
          return null;
        });
      },
    },
  );
}
