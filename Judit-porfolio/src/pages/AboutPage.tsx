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
        description: "Tras haber alcanzado mi objetivo de ayudar a los demás a través d ela fisioterpia, estoy entusiasmada por seguir mi pasión por la programación y el desarrollo web. Mi experiencia como fisioterapeuta ha fortalecido mis habilidades para resolver problemas, tomar decisiones y trabajar en equipo. Además, la escucha activa y el haber sido mentora de compañeros, me han proporcionado valiosas habilidades interpersonales que ahora quiero aplicar en el mundo del desarrollo web. He aprendido mediante cursos y a través de Codebar, y estoy emocionada con esta nueva aventura. Busco mi primera oportunidad para aplicar mis habilidades técnicas e interpersonales mientras crezco como desarrolladora."
    } : {
        title: "About me",
        description: "Having fulfilled my goal of helping others through physiotherapy, I am now eager to pursue my passion for technology and coding in web development. My experience as a physiotherapist has strengthened my problem-solving skills, decision-making, and teamwork. Mentoring others and active listening have given me valuable interpersonal skills that I now bring into tech. I have been learning to code through courses and Codebar, and I'm excited for this journey. I am looking for my first role to apply my technical and interpersonal skills while growing as a developer"
    }

    return(
        <About language= {language} theme={theme} title={Text.title} description={Text.description}/>
    )
}

export default AboutPage