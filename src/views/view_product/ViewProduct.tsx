import React from 'react'
import { Outlet } from 'react-router-dom'

const ViewProduct = () => {
    return (
        <div>
            View Product
            <Outlet />
        </div>
    )
}

export default ViewProduct
