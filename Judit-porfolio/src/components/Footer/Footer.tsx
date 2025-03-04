import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeProvider"
import { LanguageContext } from "../../context/LanguageContext"


function Footer(){

    const { theme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)


    return(
        <div className="h-16 w-full ">
            {theme === 'light' && 
                <div className="h-12 w-full bg-blue-200">
                    <h1>Desarrollado por Judit</h1>
                </div>
            }

            {theme === 'dark' && 
                <div className="h-12 w-full bg-transparent text-white">
                <h1>Desarrollado por Judit</h1>
            </div>
            }

            {language === 'spanish' &&
                <h1>HOLA MUNDO!!</h1>
            }

            {language === 'english' && 
                <h1>HELLO WORLD!!</h1>
            }
        </div>
    )
}

export default Footer