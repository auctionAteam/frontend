import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

import { ACCESS_TOKEN } from '@/constants/token';

const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    const request = error.config;

    if ((error.response?.status === 401 || error.response?.status === 406) && !request._retry) {
      localStorage.removeItem(ACCESS_TOKEN);
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export { httpClient };
