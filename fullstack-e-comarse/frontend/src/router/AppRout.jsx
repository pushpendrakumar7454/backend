
import {
    createBrowserRouter,
    RouterProvider
} from "react-router";

import Register from "../features/auth/ui/components/Register";
import Login from "../features/auth/ui/components/Login";
import Profile from "../features/auth/ui/components/Profile";
import { useEffect } from "react";
import { hydreadUser } from "../features/auth/api/useApi";

const AppRout = () => {


    useEffect(()=>{
        try {
            hydreadUser()
        } catch (error) {
            console.log(error)
        }
    })

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        },{
            path:"/profile",
            element:<Profile/>
        }
    ]);

    return <RouterProvider router={router} />;
};

export default AppRout;

