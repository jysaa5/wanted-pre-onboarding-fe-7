import commonAxios from '../../lib/client/commonAxios';
import { UserInfo } from '../types/UserInfo';
const getAccessTokenBySignIn = async (params: UserInfo) => {
  try {
    const response = await commonAxios.post('/auth/signin', {
      email: params.username,
      password: params.password,
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
  return '';
};

const createUserAuth = async (params: UserInfo) => {
  try {
    const response = await commonAxios.post('/auth/signup', {
      email: params.username,
      password: params.password,
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
  return '';
};

export { createUserAuth, getAccessTokenBySignIn };
