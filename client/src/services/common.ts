import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

export interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: object;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : '',
  timeout: 7000,
  headers: {}
};

export const createAxiosInstance = (optionConfig?: object) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);
  instance.interceptors.response.use(res => ({
    ...res,
    data: camelcaseKeys(res.data, { deep: true }),
  }));

  return instance;
};
