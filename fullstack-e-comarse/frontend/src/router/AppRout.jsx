import { createBrowserRouter, RouterProvider } from "react-router";

import Register from "../features/auth/ui/components/Register";
import Login from "../features/auth/ui/components/Login";
import { useEffect } from "react";
import { hydreadUser } from "../features/auth/api/useApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";

import ProtectedRoute from "./ProteectedRoute/ProtectedRoute";
import PublicProtectedRoute from './Public/PublicProtectedRoute'
import UserHeader from "../shared/ui/components/UserHeader";
import SellerHeader from "../shared/ui/components/SellerHeader";

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
 

  const router=createBrowserRouter([
    {
      path:'/',
      element:<ProtectedRoute/>,
      children:[
        {
          path:"/user-header",
          element:<UserHeader/>
        },
        {
          path:"/seller-header",
          element:<SellerHeader/>
        }
      ]
    },
    {
    element:<PublicProtectedRoute/>,
    children:[
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
    }
  ])
  
  return <RouterProvider router={router} />;
};

export default AppRout;
