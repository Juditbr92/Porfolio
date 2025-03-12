import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { LanguageContext } from "../context/LanguageContext";


function About(){

    const { theme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)

    const isDark = theme === 'dark'
    const isSpanish = language === 'spanish'
    const textColor = isDark ? 'text-white' : 'text-black'
    const Text = isSpanish ? {
        title: "Sobre mí",
        description: "lorem español"
    } : {
        title: "About me",
        description: "lorem English"
    }
    
    return(
        <div className="flex align-middle">
            <div className="flex flex-col justify-center pt-8 px-16 h-[80vh] w-1/2">
                <h1>{Text.title}</h1>
                <p className={`text-lg mt-4 ${textColor}`}>{Text.description}</p>
            </div>
            
            <div className="flex justify-center items-center h-[80vh] w-1/2">
                <img className= "h-[80%]" src="/foto.jpg" alt="Foto" />
            </div>
            
        </div>
        
    )
}

export default About