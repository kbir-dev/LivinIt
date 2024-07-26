import React from 'react'
import Layout from './Layout'
import IndexPage from './pages/p-jsx/IndexPage'
import LoginPage from './pages/p-jsx/LoginPage'
import RegisterPage from './pages/p-jsx/RegisterPage'
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import "./App.css"

axios.defaults.baseURL = "http://localhost:3000/api/user"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
