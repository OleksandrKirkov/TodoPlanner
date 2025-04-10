import {useCookies} from 'react-cookie'
import { Navigate, Outlet } from 'react-router'
import { pageConfig } from '../config/page.config'
import { AuthTokens } from '../services/auth/auth.service'

export const RedirectIfAuth = () => {
    const [cookies] = useCookies([AuthTokens.ACCESS_TOKEN])

    if(cookies.accessToken)
        return (
            <Navigate
                to={pageConfig.home}
                replace
            />
        )

    return <Outlet />
}
