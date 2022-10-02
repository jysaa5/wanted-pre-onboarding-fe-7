import axios, { AxiosInstance } from 'axios';

const commonAxios: AxiosInstance = axios.create({
  baseURL: '',
});

export default commonAxios;
