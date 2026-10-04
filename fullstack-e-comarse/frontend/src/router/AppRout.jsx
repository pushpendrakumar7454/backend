
import {
    createBrowserRouter,
    RouterProvider
} from "react-router";

import Register from "../features/auth/ui/components/Register";
import Login from "../features/auth/ui/components/Login";
import Profile from "../features/auth/ui/components/Profile";
import { useEffect } from "react";
import { hydreadUser } from "../features/auth/api/useApi";
import { useDispatch } from "react-redux";

const AppRout = () => {

const dispatch =useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await hydreadUser();

        console.log("HYDRATE USER:", res);

        if (res?.data?.user) {
          dispatch(addUser(res.data.user));
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, [dispatch]);


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

