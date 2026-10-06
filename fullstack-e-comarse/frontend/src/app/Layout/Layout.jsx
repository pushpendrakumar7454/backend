import React from 'react'
import UserHeader from '../../features/auth/ui/components/UserHeader'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      <UserHeader/>
      <Outlet/>
    </div>
  )
}

export default Layout
