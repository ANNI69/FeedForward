"use server"
import { cookies } from "next/headers";

const cookieStore = cookies();
export const userCookie = cookieStore.get('user')?.value;

