import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  } from 'react-router-dom'
import Scroll from './Scroll.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
     <Scroll>
      <App />
     </Scroll>
    </BrowserRouter>
  </React.StrictMode>,
)
