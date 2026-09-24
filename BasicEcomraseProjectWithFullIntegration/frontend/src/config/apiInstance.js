import axios from "axios";
import { useAuth } from "../context/authContext";

const apiInstance = axios.create({
    baseURL: "http://localhost:5173/api",
    withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((promise) => {
        if (error) {
            promise.reject(error);
        } else {
            promise.resolve(token);
        }
    });

    failedQueue = [];
};

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
        (response) => response,

        async (error) => {
            const originalRequest = error.config;

            if (
                error.response?.status === 401 &&
                !originalRequest._retry
            ) {
                originalRequest._retry = true;

                if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                        failedQueue.push({
                            resolve,
                            reject,
                        });
                    }).then((token) => {
                        originalRequest.headers.Authorization =
                            `Bearer ${token}`;

                        return apiInstance(originalRequest);
                    });
                }

                isRefreshing = true;

                try {
                    const res = await axios.post(
                        "http://localhost:5173/api/auth/refresh",
                        {},
                        {
                            withCredentials: true,
                        }
                    );

                    const newAccessToken = res.data.accessToken;

                    setAccessToken(newAccessToken);

                    processQueue(null, newAccessToken);

                    originalRequest.headers.Authorization =
                        `Bearer ${newAccessToken}`;

                    return apiInstance(originalRequest);

                } catch (refreshError) {
                    processQueue(refreshError, null);

                    return Promise.reject(refreshError);

                } finally {
                    isRefreshing = false;
                }
            }

            return Promise.reject(error);
        }
    );

    return apiInstance;
};

export default useApi;