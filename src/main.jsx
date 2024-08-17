import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CurrencyConverter} from './components/CurrencyConverter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CurrencyConverter></CurrencyConverter>
  </>
  
)
