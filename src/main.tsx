import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { CookiesProvider } from 'react-cookie'
import { Routes } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CookiesProvider>
    <Routes />
  </CookiesProvider>,
)
