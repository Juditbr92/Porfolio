import { useContext } from "react";
import About from "../components/About";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeProvider";

function AboutPage(){

    const {language} = useContext(LanguageContext)
    const {theme } = useContext(ThemeContext)
    const isSpanish = language === 'spanish'

    const Text = isSpanish ? {
        title: "Sobre mí",
        description: "lorem español"
    } : {
        title: "About me",
        description: "lorem English"
    }

    return(
        <About language= {language} theme={theme} title={Text.title} description={Text.description}/>
    )
}

export default AboutPage