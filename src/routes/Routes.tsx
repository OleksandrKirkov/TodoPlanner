import { BrowserRouter, Route, Routes } from 'react-router'
import { ProtectedRoutes } from './ProtectedRoutes'
import { RedirectIfAuth } from './RedirectIfAuth'
import { pageConfig } from '../config/page.config'
import { Auth } from '../screens/auth/Auth'
import { PROTECT_ROUTES } from './routes.data'

export function ReactRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    {PROTECT_ROUTES.map((route) => (
                        <Route {...route} />
                    ))}
                </Route>
                <Route element={<RedirectIfAuth />}>
                    <Route path={pageConfig.auth} element={<Auth />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
