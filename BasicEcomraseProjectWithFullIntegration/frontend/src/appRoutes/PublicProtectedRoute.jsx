import React from 'react'
import { useAuth } from '../context/authContext';
import { Navigate, Outlet } from 'react-router';

const PublicProtectedRoute = () => {
   const { user} = useAuth();

    if (user) {
        return <Navigate  to={"/"} replace/>;
    }

    return <Outlet/>
}

export default PublicProtectedRoute
