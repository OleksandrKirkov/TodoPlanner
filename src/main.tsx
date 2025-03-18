import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { pageConfig } from './config/page.config'
import { Home } from './screens/home/Home'
import { Auth } from './screens/auth/Auth'
import { ProtectedRoutes } from './routes/ProtectedRoutes'
import { RedirectIfAuth } from './routes/RedirectIfAuth'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    <Route index element={<Home />} />
                </Route>
                <Route element={<RedirectIfAuth />}>
                    <Route path={pageConfig.auth} element={<Auth />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
