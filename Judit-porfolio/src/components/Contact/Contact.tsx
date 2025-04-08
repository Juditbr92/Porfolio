import { useContext } from "react"
import ContactForm from "./ContactForm"
import { ThemeContext } from "../../context/ThemeProvider"
import { LanguageContext } from "../../context/LanguageContext"


function Contact(){

    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)

    const isDark = theme === 'dark'
    const textColor = isDark ? 'text-white' : 'text-black'
    const isSpanish = language === 'spanish'
    const text = isSpanish ? {
        heading: "¿Conectamos?",
        description: "Si quieres conocer más sobre mí o sobre mi trabajo, puedes encontrarme en mis redes o enviarme un mensaje desde aquí 😊", 
    } : {
        heading: "Let's connect!",
        description: "If you want to know anything else about me or about my work, you can find me on social media. Or you can send me a message here! 😊", 
    }

    return(
        <div className="h-full w-full flex flex-col mx-auto">
            <h1 className="mt-20 mx-auto md:ml-20">{text.heading}</h1>
            <div className="flex flex-col sm:flex-wrap h-full xl:h-[50vh] gap-12 items-center sm:space-between mt-12 md:flex-row md:flex-nowrap 2xl:justify-between">
                <div className={`flex flex-col mx-12 justify-center items-start gap-y-10 ${textColor} lg:max-w-[550px]`}>
                    <p >{text.description}</p>
                    <div className="flex h-16 items-center justify-items-center mx-auto gap-8">
                        {
                            theme === 'light' && 
                            <a href="https://github.com/Juditbr92">
                                <img className= "h-12 flex mx-auto justify-center" src="/toolkit/GitHub_Invertocat_Logo.svg.png" alt="Link a GitHub" />
                            </a>
                        }
                        {
                            theme === 'dark' && 
                            <a href="https://github.com/Juditbr92">
                                <img className= "h-12 flex mx-auto justify-center" src="/github_Darkmode-removebg-preview.png" alt="Link a GitHub" />
                            </a>
                        }

                        {
                            theme === 'light' && 
                            <a href="www.linkedin.com/in/judit-bardon-r">
                                <img className="h-16" src="/linkedin-logo.png" alt="Link a LinkedIn" />
                            </a>
                        }
                        {
                            theme === 'dark' && 
                            <a href="www.linkedin.com/in/judit-bardon-r">
                                <img className="h-16" src="/toolkit/likedin-removebg-preview.png" alt="Link a LinkedIn" />
                            </a>
                        }
                    
                        
                    </div>
                </div>

                <div className="flex flex-col w-1/2 mb-12 md:mr-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact