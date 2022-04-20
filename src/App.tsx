import React, { StrictMode } from 'react'
import AppRouter from './routers/AppRouter'
import './app.css'
import './styles/style.scss'

const App = () => (
    <StrictMode>
        <AppRouter />
    </StrictMode>
)

export default App
