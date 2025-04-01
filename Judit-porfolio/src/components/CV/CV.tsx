import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeProvider"
import { LanguageContext } from "../../context/LanguageContext"
import { education } from "./Education"
import { experience } from "./Experience"


function CV(){

    const yearClasses = "text-blue-400 text-xl"
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    const isDark = theme === 'dark'
    const textColor = isDark ? 'text-white' : 'text-black'
    const borderColor = isDark ? "border-white" : "border--black"

    return(
        <div className="h-[80vh]">
            <h1 className="mt-4 ml-8 mb-8">Curriculum Vitae</h1>
            <div className="h-[80%] mx-8 flex justify-between relative">

                <div className="w-1/2 flex flex-col items-center">
                    <h2 className={`border-b-2 ${borderColor} w-[50%] text-center mb-4 text-2xl ${textColor}`}>
                        { language === "spanish" ? "Educación" : "Education"}
                    </h2>
                    
                    <div className={`mx-2 ${textColor}`}>
                        {
                            education.map(edu => {
                                return(
                                    <div className="flex gap-4 py-2">
                                        <h3 className={yearClasses}>{edu.year}</h3>
                                        <p className="text-lg">{language === "spanish" ? edu.titulo : edu.title}</p>
                                    </div>
                                )
                            })
                        }   
                    </div>
                </div>

                <div className={`h-[80%] w-0.5 absolute left-1/2 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></div>

                <div className="w-1/2 flex flex-col items-center">
                    <h2 className={`border-b-2 ${borderColor} w-[50%] text-center mb-4 text-2xl ${textColor}`}>
                        {language === "spanish" ? "Habilidades y experiencia" : "Experience and Skills"}
                    </h2>
                    <div className="ml-2">
                        {
                            experience.map(exp => {
                                return(
                                    <div className={`flex flex-col gap-2 ml-8 ${textColor}`}>
                                        <div className="flex gap-2">
                                            <h3 className={yearClasses}>{exp.year}</h3> 
                                            <p className="text-lg">{language === "spanish" ? exp.titulo : exp.title} </p>
                                        </div>
                                        <p className="mb-2">{language === "spanish" ? "Habilidades desarrolladas: " : "Skills developed: " }
                                            {language === "spanish" ? exp.descriptionSp : exp.descriptionEn} 
                                        </p>
                                
                                    </div>
                                )
                            })                           
                        }      
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default CV