import React from 'react'
import Upper from '../components/Uper'
import Down from '../components/Down'
import { useState } from 'react'

const Main = () => {
  

    const [url, setUrl] = useState([])
      const [currentUrl, setCurrentUrl] = useState('');
  return (
    <div>
      <Upper setUrl={setUrl} url={url} currentUrl={currentUrl} setCurrentUrl={setCurrentUrl}/>
      <Down url={url} setUrl={setUrl}  currentUrl={currentUrl} setCurrentUrl={setCurrentUrl}/>
    </div>
  )
}

export default Main
