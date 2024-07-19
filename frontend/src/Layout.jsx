import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/c-jsx/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout
