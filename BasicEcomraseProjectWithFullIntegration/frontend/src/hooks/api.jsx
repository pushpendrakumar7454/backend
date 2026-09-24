import useApi from "../config/apiInstance";

export const useAuthApi = () => {
    const api = useApi();

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


    const  hydreadUser=async ()=>{
        const res=await api.get("/auth/me")
        return res.data
    }

    const logoutUser=async()=>{
        const res= await api.post("/auth/logout")
        return res.data
    }

    return {
        registerApi,
        logoutUser,
        loginApi,
        hydreadUser
    };
};