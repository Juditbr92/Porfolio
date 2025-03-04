import { createContext, useState } from "react"

type LanguageMode = 'spanish' | 'english'

type LanguageContextType = {
    language: LanguageMode;
    changeSpanish: () => void;
    changeEnglish: () => void
}
const LanguageContext = createContext<LanguageContextType> ({language: 'spanish', changeSpanish: ()=> {}, changeEnglish: ()=> {}})

function LanguageProvider({children}: {children: React.ReactNode}){

    const [language, setLanguage] = useState<LanguageMode>(() => {
        return (localStorage.getItem("language") as LanguageMode || 'spanish')
    })

    // funcion para alternar entre español e ingles
    function changeEnglish(){
        setLanguage("english")
        localStorage.setItem("language", "english")
    }

    function changeSpanish(){
        setLanguage("spanish")
        localStorage.setItem("language", "spanish")
    }

    return(
        <LanguageContext.Provider value={{language, changeSpanish, changeEnglish}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider
export {LanguageContext}