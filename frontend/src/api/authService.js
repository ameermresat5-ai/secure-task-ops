import { api } from "./api";

export async function registerUser(userData) {
  const response = await api.post("/register", userData);
  return response.data;
}

export async function loginUser(loginData) {
  const response = await api.post("/login", loginData);
  return response.data;
}
