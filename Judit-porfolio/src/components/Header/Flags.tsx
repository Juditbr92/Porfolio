import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"

function Flags(){

    const {changeSpanish, changeEnglish } = useContext(LanguageContext)

    if(!LanguageContext){
        throw new Error("Language must be used inside a LanguageProvider")
    }

    return(
        <div className="absolute top-6 left-6 flex items-center gap-4">
            <div>
                <button onClick={changeEnglish}>
                    <img className= "h-6 w-10" src="/Uk flag.png" alt="English" />
                </button>
            </div>
        
            <div>
                <button onClick={changeSpanish}>
                    <img className= "h-6 w-10" src='\Bandera_de_España.svg.webp' alt="Español" />
                </button>
            </div>
        </div>
        )
    }
    
    export default Flags
    