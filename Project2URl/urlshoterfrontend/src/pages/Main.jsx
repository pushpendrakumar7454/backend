import React from 'react'
import Upper from '../components/Uper'
import Down from '../components/Down'
import { useState } from 'react'

const Main = () => {
  

    const [url, setUrl] = useState([])
  return (
    <div>
      <Upper/>
      <Down url={url} setUrl={setUrl}/>
    </div>
  )
}

export default Main
