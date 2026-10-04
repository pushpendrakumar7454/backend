import React from 'react'
import {store} from '../src/app/store'
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className='text-red-700'>
      <Provider>
        <App store={store}/>
      </Provider>
    </div>
  )
}

export default App
