import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicProtectedRoute = () => {

   const{users}=useSelector((state)=>state.auth)

   if(users.role=="user"){
    return <Navigate to={"/user-header"}  replace/>
   }

   if(users.role=='seller'){
    return <Navigate to={"/seller-Header"} replace/>
   }
  return <Outlet/>
}

export default PublicProtectedRoute
