import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Register from "../components/Register";
import Login from "../components/Login";
import Main from "../pages/Main";
import Product from "../pages/Product";
import CreateProduct from "../components/CreateProduct";
import About from "../components/About";

import ProtectedRoute from "./ProtectedRoute";
import PublicProtectedRoute from "./PublicProtectedRoute";
import Layout from "../components/Layout";

import { useAuthApi } from "../hooks/api";

const AppRoutes = () => {
  const { hydreadUser } = useAuthApi();

  useEffect(() => {
    const getUser = async () => {
      try {
        await hydreadUser();
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  const router = createBrowserRouter([
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Main />,
            },

            {
              path: "/about",
              element: <About />,
            },

            {
              path: "/create-product",
              element: <CreateProduct />,
            },

            {
              path: "/product",
              element: <Product />,
            },
          ],
        },
      ],
    },

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