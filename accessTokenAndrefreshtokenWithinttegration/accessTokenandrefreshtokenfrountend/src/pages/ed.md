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