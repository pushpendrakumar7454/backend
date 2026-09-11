
import axios from "axios";
import { useAuth } from "../context/authContext";

export const apiInstance = axios.create({
  baseURL: "http://localhost:5173/api",
  withCredentials: true,
});

const useApi = () => {
  const { accessToken, setAccessToken } = useAuth();

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

  apiInstance.interceptors.response.use(
    (response) => {
      return response;
    },

    async (error) => {
      if (error.response?.status === 401) {
        try {
          const res = await axios.post(
            "http://localhost:5173/api/auth/refresh",
            {
              withCredentials: true,
            }
          );
          const newAccessToken = res.data.accessToken;
          setAccessToken(newAccessToken);
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiInstance(error.config);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
  return apiInstance;
};

export default useApi;