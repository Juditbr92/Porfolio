import { useContext } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { ThemeContext } from './context/ThemeProvider'


function App() {
  const { theme } = useContext(ThemeContext)

  return (
        <div className="absolute z-20">
        {/* Fondo para modo light */}
          {theme === 'light' && 
            <div className="fixed inset-0 z-0 h-full w-full bg-[#fafafa]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]"></div>
            </div>
          }

          {/* Fondo para modo dark */}
          {theme === 'dark' && 
                <div className="fixed inset-0 z-0 h-full w-full bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>
          }

          {/* Contenido de la APP */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header /> 
          
            <Footer/>
          </div>
          
          
        
        </div>
  
  )
}

export default App
