import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './07-reducer/intro-reducer.js'
import { TodoApp } from './Components/TodoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
