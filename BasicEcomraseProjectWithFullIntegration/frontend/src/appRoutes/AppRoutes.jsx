import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Register from '../components/Register'
import Login from '../components/Login'
import Profile from '../components/Profile'

const AppRoutes = () => {

    const router = createBrowserRouter([
       {
        path:"/register",
        element:<Register/>
       },
       {
        path:"/login",
        element:<Login/>
       },{
        path:"/profile",
        element:<Profile/>
       }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
