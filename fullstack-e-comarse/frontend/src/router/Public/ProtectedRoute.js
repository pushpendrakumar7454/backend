import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

   const{users}=useSelector((state)=>state.auth)

   if(users.role=="user"){
    return <Navigate to={"/userHeader"}  replace/>
   }

   if(users.role=='seller'){
    return <Navigate to={"/sellerHeader"} replace/>
   }
  return <Outlet/>
}

export default ProtectedRoute
