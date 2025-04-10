import { RouteProps } from 'react-router'
import { Home } from '../screens/home/Home'
import { pageConfig } from '../config/page.config'
import { Upcoming } from '../screens/home/Upcoming'
import { Completed } from '../screens/home/Completed'

export const PROTECT_ROUTES: RouteProps[] = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: pageConfig.upcoming,
        element: <Upcoming />,
    },
    {
        path: pageConfig.completed,
        element: <Completed />,
    },
]
