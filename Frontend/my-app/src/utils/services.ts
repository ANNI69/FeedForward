import axios from "axios";
import {
  getDashboard,
  getFoodUrl,
  getUser,
  userLoginUrl,
  userRegisterUrl,
} from "@/Constants";

// const res = axios.get(BASE_URL + '/user')

export async function userLogin(data: any) {
  const res = axios.post(userLoginUrl, data);
  return res;
}

export async function userRegister(data: any) {
  const res = axios.post(userRegisterUrl, data);
  return res;
}

export async function userLogout() {
  const res = axios.post(userRegisterUrl);
  return res;
}

export async function getProfile(userId: string) {
  const res = axios.get(getUser + "/" + userId);
  return res;
}

export async function sendFoodData(data: any, token: string, userId: string) {
  const res = axios.post(getFoodUrl, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export async function getDashboardData(userId: string, token: string) {
  const res = axios.get(getDashboard + "/" + userId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}
