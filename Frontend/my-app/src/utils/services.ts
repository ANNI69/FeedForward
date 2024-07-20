import axios from 'axios';
import { getUser, userLoginUrl, userRegisterUrl } from '@/Constants';

// const res = axios.get(BASE_URL + '/user')

export async function userLogin(data: any) {
  const res = axios.post(userLoginUrl, data);
  return res;
};

export async function userRegister(data: any) {
  const res = axios.post(userRegisterUrl, data);
  return res;
};

export async function userLogout() {
  const res = axios.post(userRegisterUrl);
  return res;
};

export async function getProfile(userId: string) {
  const res = axios.get(getUser + '/' + userId);
  return res;
}

