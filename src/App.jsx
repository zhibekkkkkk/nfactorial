import React,{useState} from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Dogs from './components/Dogs'
import LoginSignup from './components/LoginSignup'
import DogsContextProvider from './components/context/DogsContext'
const router = createBrowserRouter([{
  path:'/',
  element: <Layout/>,
  children: [
    {
      path:'/dogs',
      element: <Dogs />,
    },
    {
      path: '/login',
      element: <LoginSignup option='login'/>
    },
    {
      path: '/signup',
      element: <LoginSignup option='signup'/>
    }
  ]
}])
const App = () => {
  return (
    <DogsContextProvider><RouterProvider router={router}></RouterProvider></DogsContextProvider>
  )
}

export default App