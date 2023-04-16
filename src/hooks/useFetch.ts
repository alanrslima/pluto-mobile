import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {fetcher} from '../services/fetcher';

export type UseFetchProps = {
  key: any;
  url: string;
  params?: any;
  config?: any;
  context?: any;
  processor?: (data: any) => any;
};

export type UseFetchHooks = Omit<UseFetchProps, 'key' | 'url'>;

export const useFetch = <T>({
  key,
  url,
  params,
  config,
  context,
  processor,
}: UseFetchProps): UseQueryResult<T, Error> => {
  return useQuery(key, () => fetcher({url, params, context, processor}), {
    ...config,
  });
};
