import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Register from '../components/Register'
import Login from '../components/Login'
import Profile from '../components/Profile'
import { useAuthApi } from '../hooks/api'
import Header from '../components/Header'
import Main from '../pages/Main'
import Product from '../components/Product'

const AppRoutes = () => {
     const {hydreadUser}=useAuthApi()
     useEffect(()=>{
        (async()=>{
            try {
               await hydreadUser()   
            } catch (error) {
                return console.log(error)
            }
        })()
     },[])

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
       },{
        path:"/header",
        element:<Main/>
       },{
         path:"/product",
         element:<Product/>
       }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
