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
            <Route element={<view.ViewProduct />} path={ROUTES.VIEW_PRODUCT} />
        </Routes>
    </Router>
)

export default AppRouter
