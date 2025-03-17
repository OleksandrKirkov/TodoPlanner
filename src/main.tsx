import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { pageConfig } from './config/page.config'
import { Home } from './screens/home/Home'
import { Auth } from './screens/auth/Auth'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={pageConfig.home} element={<Home />} />
                <Route path={pageConfig.auth} element={<Auth />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
