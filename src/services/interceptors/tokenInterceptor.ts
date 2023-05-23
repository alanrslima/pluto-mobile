import {AxiosInstance} from 'axios';
import {session} from '../../lib/session';
// import {getSession} from 'next-auth/react';

export function addTokenInterceptor(api: AxiosInstance, ctx): AxiosInstance {
  api.interceptors.request.use(
    async function (config) {
      // Do something before request is sent
      const data = await session().get();

      if (!data?.token) {
        return config;
      }

      return {
        ...config,
        headers: {...config?.headers, Authorization: `Bearer ${data.token}`},
      };
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // api.interceptors.request.use(
  //   async config => {
  //     try {
  //       const session = await getSession();

  //       if (!session) {
  //         return {...config};
  //       }

  //       return {
  //         ...config,
  //         headers: {
  //           ...config?.headers,
  //           Authorization: `Bearer ${session?.token}`,
  //         },
  //       };
  //     } catch {
  //       return {...config};
  //     }
  //   },
  //   (error: AxiosError) => {
  //     return Promise.reject(error);
  //   },
  // );

  return api;
}
