import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Providers from './providers/Providers'
import { ReactRoutes } from './routes/Routes'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Providers>
            <ReactRoutes />
        </Providers>
    </StrictMode>,
)
