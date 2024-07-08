import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrototypeApp} from './PrototypeApp'
import { Menu } from './components/Menu'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrototypeApp/>
    <Menu/>
  </React.StrictMode>,
)
