import React from 'react'
import {Navigate, Outlet} from 'react-router'
import {useSelecter} from 'react-redux'
const ProtectedRoute = () => {
  
    const{users}=useSelecter((state)=>state.auth)

    if(!users){
        return <Navigate to={"/login"} replace/>
    }
  return <Outlet/>
}

export default ProtectedRoute
