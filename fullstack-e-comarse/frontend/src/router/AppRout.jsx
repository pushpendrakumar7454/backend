import { createBrowserRouter, RouterProvider } from "react-router";

import Register from "../features/auth/ui/components/Register";
import Login from "../features/auth/ui/components/Login";
import Profile from "../features/auth/ui/components/Profile";
import { useEffect } from "react";
import { hydreadUser } from "../features/auth/api/useApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";
import UserHeader from "../features/auth/ui/components/UserHeader";
import SellerHeader from "../features/auth/ui/components/SellerHeader";

const AppRout = () => {
  const dispatch = useDispatch();

     
  useEffect(()=>{
    (async()=>{
      try {
        const res=await hydreadUser()
          dispatch(addUser(res.data.user));
      } catch (error) {
        console.log(error)
      }
    })()
  },[dispatch])
 

  const router = createBrowserRouter([
    {
      path: "/",
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
      path:"/user-header",
      element:<UserHeader/>
    },{
      path:"/seller-header",
      element:<SellerHeader/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRout;
