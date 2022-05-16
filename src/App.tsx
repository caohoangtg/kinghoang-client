import React, { StrictMode } from 'react'
import AppRouter from './routers/AppRouter'
import './styles/style.scss'

const App = () => (
    <StrictMode>
        <AppRouter />
    </StrictMode>
)

export default App
