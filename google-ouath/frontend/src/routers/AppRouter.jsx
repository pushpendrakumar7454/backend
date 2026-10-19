
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Register from "../features/auth/ui/pages/Register";
import Login from "../features/auth/ui/pages/Login";
import Profile from "../features/auth/ui/pages/Profile";
import { hydreatedUser } from "../features/auth/api/api";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/auth";
import GoogleCallback from "../features/auth/ui/pages/GoogleCallback";


const AppRouter = () => {

const dispatch=useDispatch()

    useEffect(()=>{
      (async()=>{
        try {
          const res=await hydreatedUser()
           console.log(res)
           dispatch(addUser(res.data.data.user))
        } catch (error) {
         console.log(error) 
        }
      })()
    })


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
  {
    path:"/google/callback",
    element:<GoogleCallback/>
  }
]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
