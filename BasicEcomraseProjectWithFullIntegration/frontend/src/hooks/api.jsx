import useApi from "../config/apiInstance";
import { useAuth } from "../context/authContext";

export const useAuthApi = () => {
  const api = useApi();
  const { setUser, setLoading } = useAuth();
  const registerApi = async (credentials) => {
    try {
      const res = await api.post("/auth/register", credentials);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const loginApi = async (credentials) => {
    try {
      const res = await api.post("/auth/login", credentials);

      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const hydreadUser = async () => {
    try {
      setLoading(true);

      const res = await api.get("/auth/me");

      console.log("HYDRATE USER:", res.data);

      setUser(res.data.data.user);
    } catch (error) {
      console.log("HYDRATE ERROR:", error.response?.data);

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    const res = await api.post("/auth/logout");
    return res.data;
  };

  return {
    registerApi,
    logoutUser,
    loginApi,
    hydreadUser,
  };
};
