import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MealsProvider from './providers/MealsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MealsProvider>
      <App />
    </MealsProvider>
  </React.StrictMode>,
)
