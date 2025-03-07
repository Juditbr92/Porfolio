import { useContext } from "react"
import Intro from "../components/Intro"
import { LanguageContext } from "../context/LanguageContext"
import { ThemeContext } from "../context/ThemeProvider"


function IntroPage(){

    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    return( 
        <div>
            <Intro language= {language} theme = {theme} />
        </div>
    )
}

export default IntroPage