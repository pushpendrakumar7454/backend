import React, { useState } from 'react'
import Upper from '../components/Upper'
import Down from '../components/Down';
import { UrlContextProvider } from '../context/UrlContext';

const Main = () => {
  

  const [currentUrl, setcurrentUrl] = useState('')

  return (
    <div>
      <UrlContextProvider>
        <Upper currentUrl={currentUrl} setcurrentUrl={setcurrentUrl}/>
        <Down currentUrl={currentUrl} setcurrentUrl={setcurrentUrl}/>
      </UrlContextProvider>
    </div>
  )
}

export default Main;