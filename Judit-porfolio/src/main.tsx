import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import ThemeProvider from './context/ThemeProvider.tsx'
import LanguageProvider from './context/LanguageContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
        <BrowserRouter> 
                <ThemeProvider>  
                <LanguageProvider>
                        <App />
                </LanguageProvider>              
                </ThemeProvider>
        </BrowserRouter> 
)
