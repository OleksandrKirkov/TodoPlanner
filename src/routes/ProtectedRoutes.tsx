import { Navigate, Outlet } from "react-router"
import { useProfile } from "../hooks/useProfile"
import { pageConfig } from "../config/page.config"
import Loader from "../components/ui/loaders/Loader"

export const ProtectedRoutes = () => {
    const {user, isLoading} = useProfile()

    if(isLoading) return <Loader />

    if(!user?.isLoggedIn)
        return (
            <Navigate
                to={pageConfig.auth}
                replace
            />
        )
    
    return <Outlet />
}
