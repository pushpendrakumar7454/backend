import React from 'react'
import Upper from '../components/Upper'
import Down from '../components/Down';
import { UrlContextProvider } from '../context/UrlContext';

const Main = () => {
  return (
    <div>
      <UrlContextProvider>
        <Upper/>
        <Down/>
      </UrlContextProvider>
    </div>
  )
}

export default Main;