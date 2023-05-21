import axios, {AxiosInstance} from 'axios';
import {addAuthInterceptor} from '../interceptors/authInterceptor';
import {addCSRFInterceptor} from '../interceptors/csrfInterceptor';
import {addLocaleInterceptor} from '../interceptors/localeInterceptor';
import {addTokenInterceptor} from '../interceptors/tokenInterceptor';

export function createApi(): AxiosInstance {
  return axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_URL,
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

const fetchCSRF = async () => {
  const csrfApi = createApi();
  const response = await csrfApi.get('/csrf-cookie', {withCredentials: true});
  return response?.data;
};

export function setupApiClient(ctx = undefined): AxiosInstance {
  const apiInstance = createApi();

  addTokenInterceptor(apiInstance, ctx);
  addLocaleInterceptor(apiInstance);
  addCSRFInterceptor(apiInstance, fetchCSRF);
  addAuthInterceptor(apiInstance, ctx);

  return apiInstance;
}

export const api = setupApiClient();

export const getApiInstance = (ctx: any) => {
  if (ctx) {
    return setupApiClient(ctx);
  }
  return api;
};
