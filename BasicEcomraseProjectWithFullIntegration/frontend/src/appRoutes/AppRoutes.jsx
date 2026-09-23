import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Register from '../components/Register'
import Login from '../components/Login'

const AppRoutes = () => {

    const router = createBrowserRouter([
       {
        path:"/register",
        element:<Register/>
       },
       {
        path:"/login",
        element:<Login/>
       }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
