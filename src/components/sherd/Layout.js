import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidber from './Sidber'
import Header from './Header'

const Layout = () => {
    return (
        <div className="bg-neutral-100 overflow-hidden flex flex-row">
        <Sidber />
        <div className="flex flex-col flex-1">
            <Header />
            <div className="flex-1 p-4 min-h-0 overflow-auto">
                <Outlet />
            </div>
        </div>
    </div>


    )
}

export default Layout