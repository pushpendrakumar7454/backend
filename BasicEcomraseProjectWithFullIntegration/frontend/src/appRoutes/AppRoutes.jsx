import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Register from '../components/Register'
import Login from '../components/Login'
import Profile from '../components/Profile'
import { useAuthApi } from '../hooks/api'
import Header from '../components/Header'

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
        element:<Header/>
       }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
