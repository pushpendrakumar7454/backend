import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

    
const {user}=useSelecter((state)=>state.auth)
    
  return (
    <div>
      <h1>user?.name</h1>
      <h1>user?.email</h1>
    </div>
  )
}

export default Profile
