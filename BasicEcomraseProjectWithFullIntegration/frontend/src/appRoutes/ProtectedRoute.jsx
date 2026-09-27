import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import useApi from "../config/apiInstance";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to={"/login"} replace/>;
    }

    return <Outlet/>
};

export default ProtectedRoute;