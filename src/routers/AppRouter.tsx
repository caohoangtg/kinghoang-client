import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
//import { createBrowserHistory } from 'history'
import * as ROUTES from '../constants/routes'
import * as view from '../views'
//import { default as Router } from './CustomRouter'

//const history = createBrowserHistory()

const AppRouter = () => (
    <Router>
        <Routes>
            <Route element={<view.Home />} path={ROUTES.HOME} />
            <Route element={<view.Cart />} path={ROUTES.CART} />
            <Route element={<view.Recommended />} path={ROUTES.RECOMMENDED} />
            <Route element={<view.Category />} path={ROUTES.CATEGORY} />
            <Route element={<view.Order />} path={ROUTES.ORDER} />
            <Route
                element={<view.OrderTracker />}
                path={ROUTES.ORDER_TRACKER}
            />
            <Route
                element={<view.PaymentReceipt />}
                path={ROUTES.PAYMENT_RECEIPT}
            />
            <Route
                element={<view.MemberRegistration />}
                path={ROUTES.MEMBER_REGISTRATION}
            />
            <Route element={<view.ViewProduct />} path={ROUTES.VIEW_PRODUCT} />
        </Routes>
    </Router>
)

export default AppRouter
