import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import { ThemeContext } from "../context/ThemeProvider"

function Intro(){

    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    const imgClasses = "w-full border-2 rounded-full border-blue-400 bg-blue-200 ml-12 place-self-end"

    return( 
        <div className="h-[80vh] flex items-center justify-center">

            {/* Spanish and light */}
            {language === 'spanish' && theme==='light' && (
                <div className="flex w-3/4 items-center justify-between">
                    <div className="text-left text-black">
                        <h1>Hola! Soy Judit 👋</h1>
                        <h3>Soy una apasionada del desarrollo web que inició su camino de forma autodidacta. <br />
                            Tras una carrera en el mundo de la fisioterapia, <br /> ahora busco desarrollar todo mi potencial en el ámbito tecnológico!</h3>
                    </div>
                    <div className="flex justify-items-end w-1/3">
                        <img src="\myAvatar.svg" alt="Foto de avatar" className={imgClasses}/>
                    </div>
                </div>
                
            )}

            {/* Spanish and dark mode */}

            {language === 'spanish' && theme==='dark' && (
                <div className="flex w-3/4 items-center justify-between">
                    <div className="text-left text-white">
                        <h1>Hola! Soy Judit 👋</h1>
                        <h3>Soy una apasionada del desarrollo web que inició su camino de forma autodidacta. <br />
                            Tras una carrera en el mundo de la fisioterapia, <br /> ahora busco desarrollar todo mi potencial en el ámbito tecnológico!</h3>
                    </div>
                    <div className="flex justify-items-end w-1/3">
                        <img src="\myAvatar.svg" alt="Foto de avatar" className={imgClasses}/>
                    </div>
                </div>
                
            )}

            {/* English and light */}

            {language === 'english' && theme==='light' && (
                <div className="flex w-3/4 items-center justify-between">
                    <div className="text-left text-black">
                        <h1>Hi! I'm Judit 👋</h1>
                        <h3>I am passionate self-tought web developer<br />
                            After a successful career in physiotherapy, <br /> I now aim to develop my full potential in the technological field!</h3>
                    </div>
                    <div className="flex justify-items-end w-1/3">
                        <img src="\myAvatar.svg" alt="Foto de avatar" className={imgClasses}/>
                    </div>
                </div>
                
            )}

             {/* English and dark */}

            {language === 'english' && theme==='dark' && (
                <div className="flex w-3/4 items-center justify-between">
                    <div className="text-left text-white">
                        <h1>Hi! I'm Judit 👋</h1>
                        <h3>I am passionate self-tought web developer<br />
                            After a successful career in physiotherapy, <br /> I now aim to develop my full potential in the technological field!</h3>
                    </div>
                    <div className="flex justify-items-end w-1/3">
                        <img src="\myAvatar.svg" alt="Foto de avatar" className={imgClasses}/>
                    </div>
                </div>
                
            )}
            
            
        </div>
    )
}

export default Intro