
import axios from "axios";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

const apiInstance = axios.create({
    baseURL: "https://backend-2-icq9.onrender.com/api",
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

    const {
        accessToken,
        setAccessToken,
    } = useAuth();

    useEffect(() => {

        // =========================
        // REQUEST INTERCEPTOR
        // =========================

        const requestInterceptor =
            apiInstance.interceptors.request.use(
                (config) => {

                    if (accessToken) {
                        config.headers.Authorization =
                            `Bearer ${accessToken}`;
                    }

                    return config;
                },

                (error) => {
                    return Promise.reject(error);
                }
            );


        // =========================
        // RESPONSE INTERCEPTOR
        // =========================

        const responseInterceptor =
            apiInstance.interceptors.response.use(

                (response) => {
                    return response;
                },

                async (error) => {

                    const originalRequest = error.config;

                    // =========================
                    // CHECK 401
                    // =========================

                    if (
                        error.response?.status === 401 &&
                        originalRequest &&
                        !originalRequest._retry
                    ) {

                        /*
                         * Agar request already refresh endpoint hai,
                         * to refresh ko dobara refresh mat karo.
                         */

                        if (
                            originalRequest.url?.includes(
                                "/auth/refresh"
                            )
                        ) {
                            return Promise.reject(error);
                        }

                        originalRequest._retry = true;


                        // =========================
                        // ALREADY REFRESHING
                        // =========================

                        if (isRefreshing) {

                            return new Promise(
                                (resolve, reject) => {

                                    failedQueue.push({
                                        resolve,
                                        reject,
                                    });

                                }
                            ).then((token) => {

                                originalRequest.headers.Authorization =
                                    `Bearer ${token}`;

                                return apiInstance(
                                    originalRequest
                                );

                            });
                        }


                        // =========================
                        // START REFRESH
                        // =========================

                        isRefreshing = true;

                        try {

                            console.log(
                                "Access token expired. Refreshing..."
                            );

                            /*
                             * refreshToken HttpOnly cookie me hai.
                             *
                             * withCredentials: true ki wajah se
                             * browser cookie automatically send karega.
                             */

                            const res =
                                await apiInstance.post(
                                    "/auth/refresh",
                                    {}
                                );


                            console.log(
                                "REFRESH RESPONSE:",
                                res.data
                            );


                            /*
                             * Tumhare backend ka response:
                             *
                             * {
                             *   message: "refresh token roteted",
                             *   accessToken: "...",
                             *   data: {
                             *      user: {...}
                             *   }
                             * }
                             */

                            const newAccessToken =
                                res.data.accessToken;


                            if (!newAccessToken) {

                                throw new Error(
                                    "New access token not received"
                                );
                            }


                            // =========================
                            // SAVE NEW ACCESS TOKEN
                            // =========================

                            setAccessToken(
                                newAccessToken
                            );


                            // =========================
                            // PROCESS WAITING REQUESTS
                            // =========================

                            processQueue(
                                null,
                                newAccessToken
                            );


                            // =========================
                            // RETRY ORIGINAL REQUEST
                            // =========================

                            originalRequest.headers.Authorization =
                                `Bearer ${newAccessToken}`;


                            return apiInstance(
                                originalRequest
                            );

                        } catch (refreshError) {

                            console.log(
                                "REFRESH ERROR:",
                                refreshError.response?.data ||
                                refreshError.message
                            );


                            // Waiting requests ko reject karo
                            processQueue(
                                refreshError,
                                null
                            );


                            // Access token remove
                            setAccessToken(null);


                            return Promise.reject(
                                refreshError
                            );

                        } finally {

                            isRefreshing = false;
                        }
                    }


                    // =========================
                    // OTHER ERRORS
                    // =========================

                    return Promise.reject(error);
                }
            );


        // =========================
        // CLEANUP INTERCEPTORS
        // =========================

        return () => {

            apiInstance.interceptors.request.eject(
                requestInterceptor
            );

            apiInstance.interceptors.response.eject(
                responseInterceptor
            );
        };

    }, [accessToken, setAccessToken]);


    return apiInstance;
};

export default useApi;

