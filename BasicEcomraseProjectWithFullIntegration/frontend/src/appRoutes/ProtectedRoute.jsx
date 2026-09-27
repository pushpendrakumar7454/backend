import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/authContext";

const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-xl font-semibold">
                    Loading...
                </h1>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;