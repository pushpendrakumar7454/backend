import React from 'react'
import AppRoutes from './appRoutes/AppRoutes'
import AuthContextProvider from './context/authContext'


const App = () => {
  return (
    <div>
     <AuthContextProvider><AppRoutes/></AuthContextProvider>
    </div>
  )
}

export default App
