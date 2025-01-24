import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL, AUTHTOKEN, AUTHORIZATION_HEADER } from '../utils/config';

const configureInterceptors = (apiClient) => {
  apiClient.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem(AUTHTOKEN);
      if (token) {
        config.headers[AUTHORIZATION_HEADER] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  apiClient.interceptors.response.use(
    async (response) => {
      const newToken = response?.data?.data?.access_token;
      if (newToken) {
        await AsyncStorage.setItem(AUTHTOKEN, newToken);
      }
      return response;
    },
    (error) => Promise.reject(error)
  );
};

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
  validateStatus: (status) => (status >= 200 && status <= 204) || status === 401,
});

configureInterceptors(apiClient);

export default apiClient;
