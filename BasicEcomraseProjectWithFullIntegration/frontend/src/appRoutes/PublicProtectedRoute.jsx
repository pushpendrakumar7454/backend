import React from 'react'
import { useEffect } from 'react';
import useApi from '../config/apiInstance';
import { useAuth } from '../context/authContext';
import { Navigate, Outlet } from 'react-router';

const PublicProtectedRoute = () => {
   const { user, setUser } = useAuth();
    const api = useApi();

    const getData = async () => {
        try {
            const res = await api.get("/auth/me");
            setUser(res.data.data.user);

        } catch (error) {
            console.log("DATA:", error.response?.data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (!user) {
        return <Navigate  to={"/login"} replace/>;
    }

    return <Outlet/>
}

export default PublicProtectedRoute
