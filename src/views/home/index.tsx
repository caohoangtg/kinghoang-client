import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            {process.env.NODE_ENV}
            {process.env.PUBLIC_URL}
            {process.env.TARGET_ENV}
            <Link to="/product">View Product </Link>
            <Outlet />
        </div>
    )
}

export default Home
