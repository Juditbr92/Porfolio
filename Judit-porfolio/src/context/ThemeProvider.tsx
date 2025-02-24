import { createContext, useState } from "react"

type ThemeMode = 'light' | 'dark'

type ThemeContextType = {
    theme: ThemeMode;
    toggleTheme: ()=> void
}

const ThemeContext = createContext<ThemeContextType> ({theme: 'light', toggleTheme: ()=> {}})

function ThemeProvider({children}: { children: React.ReactNode }){
    // Inicializamos el estado con el valor de localStorage o "light" por defecto
    const [theme, setTheme] = useState<ThemeMode>(() => {
        return (localStorage.getItem("theme") as ThemeMode) || "light";
    });

    // Función para alternar entre "light" y "dark"
    function toggleTheme(){
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }
    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
export { ThemeContext }