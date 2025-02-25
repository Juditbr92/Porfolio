import './App.css'
import Header from './components/Header'
import ThemeProvider from './context/ThemeProvider'


function App() {
  

  return (
      <ThemeProvider>
        <div>
          <Header />
        </div>
      </ThemeProvider>
    
      
      
    
  )
}

export default App
