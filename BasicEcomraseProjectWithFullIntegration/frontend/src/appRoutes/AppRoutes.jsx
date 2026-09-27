import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Register from "../components/Register";
import Login from "../components/Login";
import Profile from "../components/Profile";
import { useAuthApi } from "../hooks/api";
import Main from "../pages/Main";
import Product from "../components/Product";
import CreateProduct from "../components/CreateProduct";

import ProtectedRoute from "./ProtectedRoute";
import PublicProtectedRoute from "./PublicProtectedRoute";

const AppRoutes = () => {
    const { hydreadUser } = useAuthApi();

    useEffect(() => {
        (async () => {
            try {
                await hydreadUser();
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const router = createBrowserRouter([
        // =========================
        // PROTECTED ROUTES
        // =========================
        {
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/",
                    element: <Main />,
                },
                {
                    path: "/profile",
                    element: <Profile />,
                },
                {
                    path: "/product/:id",
                    element: <Product />,
                },
                {
                    path: "/create-product",
                    element: <CreateProduct />,
                },
            ],
        },

        // =========================
        // PUBLIC ROUTES
        // =========================
        {
            element: <PublicProtectedRoute />,
            children: [
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/register",
                    element: <Register />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoutes;