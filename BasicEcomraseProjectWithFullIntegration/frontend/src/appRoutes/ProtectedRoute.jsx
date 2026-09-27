import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import useApi from "../config/apiInstance";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    const { user, setUser } = useAuth();
    const api = useApi();

    const getData = async () => {
        try {
            const res = await api.get("/auth/me");

            console.log("ME RESPONSE:", res.data);

            setUser(res.data.data.user);
        } catch (error) {
            console.log("DATA:", error.response?.data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (user) {
        return <Outlet />;
    }

    return <Navigate to="/login" replace />;
};

export default ProtectedRoute;