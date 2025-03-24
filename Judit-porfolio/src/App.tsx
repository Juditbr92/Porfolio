import { useContext } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { ThemeContext } from './context/ThemeProvider'
import IntroPage from './pages/IntroPage'
import { Route, Routes } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ToolkitPage from './pages/ToolkitPage'
import ContactPage from './pages/ContactPage'
import { ToastContainer } from 'react-toastify'



function App() {
  const { theme } = useContext(ThemeContext)

  return (
        <div>
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
          
          {/* Main part of the APP */}
            <div className='flex flex-grow items-center justify-center mt-12'></div>
            <Routes>
              <Route path='/' element= {<IntroPage />}  />
              <Route path= '/projects' element = {<ProjectsPage />} />
              <Route path= '/about' element={<AboutPage />} />
              <Route path = '/toolkit' element={<ToolkitPage />} />
              <Route path = "/contact" element = {<ContactPage />} />

            </Routes>
            
            <Footer/>

            <ToastContainer />
          </div>
          
          
        
        </div>
  
  )
}

export default App
