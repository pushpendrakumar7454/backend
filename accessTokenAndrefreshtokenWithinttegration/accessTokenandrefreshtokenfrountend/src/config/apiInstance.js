import axios from "axios";
import { useAuth } from "../context/authContext";

export const apiInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

const useApi = () => {
  const { accessToken } = useAuth();

  apiInstance.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return apiInstance;
};

export default useApi;