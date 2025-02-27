import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import ThemeProvider from './context/ThemeProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
        <BrowserRouter> 
                <ThemeProvider>                 
                        <App />
                </ThemeProvider>
        </BrowserRouter> 
)
