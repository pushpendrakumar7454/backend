
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Register from "../features/auth/ui/pages/Register";
import Login from "../features/auth/ui/pages/Login";
import Profile from "../features/auth/ui/pages/Profile";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
