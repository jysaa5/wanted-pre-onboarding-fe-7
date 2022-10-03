import axios, { AxiosInstance } from 'axios';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
console.log('commonAxios >>>', localStorage.getItem('access_token'));
const commonAxios: AxiosInstance = axios.create({
  baseURL: 'http://ec2-3-38-135-202.ap-northeast-2.compute.amazonaws.com:8000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
  //   cancelToken: source.token,
});

commonAxios.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

commonAxios.interceptors.response.use(
  function (response) {
    console.log(response);

    return response;
  },
  function (error) {
    console.log(error);

    return Promise.reject(error);
  },
);

export default commonAxios;
