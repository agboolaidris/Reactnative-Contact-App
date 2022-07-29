import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENV } from "../config/env";
const headers = {};

const axiosInstance = axios.create({
  baseURL: ENV.SERVER_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem("token");
    if (token) config.headers.Authorization = `bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
