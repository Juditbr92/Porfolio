import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeProvider"
import { LanguageContext } from "../../context/LanguageContext"


function Footer(){

    const { theme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)


    return(
        <div className="h-16 w-full">
            {theme === 'light' && language === 'spanish' && (
                <div className="h-12 w-full bg-blue-200 flex items-center justify-center">
                    <h1>Desarrollado por Judit 😊</h1>
                </div>
            )
            }

            {theme === 'dark' && language === 'spanish' &&(
                <div className="h-12 w-full bg-transparent text-white flex items-center justify-center">
                    <h1>Desarrollado por Judit 😊</h1>
                </div> 
            )
            }

            {/* English version */}

            {theme === 'light' && language === 'english' && (
                <div className="h-12 w-full bg-blue-200 flex items-center justify-center">
                    <h1>Developed by Judit 😊</h1>
                </div>
                )
            }

            {theme === 'dark' && language === 'english' && (
                <div className="h-12 w-full bg-transparent text-white flex items-center justify-center">
                    <h1>Developed by Judit 😊</h1>
                </div>
                )
            }
        </div>
    )
}

export default Footer