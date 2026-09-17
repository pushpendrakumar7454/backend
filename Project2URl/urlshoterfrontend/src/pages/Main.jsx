import React from 'react'
import Upper from '../components/Uper'
import Down from '../components/Down'
import { useState } from 'react'

const Main = () => {
  

    const [url, setUrl] = useState([])
  return (
    <div>
      <Upper setUrl={setUrl} url={url}/>
      <Down url={url} setUrl={setUrl}/>
    </div>
  )
}

export default Main
