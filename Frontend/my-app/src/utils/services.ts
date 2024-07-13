import axios from 'axios';
import { userLoginUrl, userRegisterUrl } from '@/Constants';

// const res = axios.get(BASE_URL + '/user')

export async function userLogin(data: any) {
  const res = axios.post(userLoginUrl, data);
  return res;
};

export async function userRegister(data: any) {
  const res = axios.post(userRegisterUrl, data);
  return res;
};

