import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import { ContextProvider } from './utils/Context.jsx'
import Navbar from './components/Navbar.jsx'


const appRouter = createBrowserRouter([
{
  path:'/',
  element:<App/>
},
{
  path:'/dashboard',
  element:<Dashboard/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <Navbar/>
    <RouterProvider  router={appRouter}/>
    </ContextProvider>
  </React.StrictMode>,
)
