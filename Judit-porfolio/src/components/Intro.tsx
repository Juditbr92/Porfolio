import { NavLink } from "react-router-dom";

type IntroProps = {
    language: 'spanish' | 'english';
    theme: 'dark' | 'light'
}


function Intro({language, theme}: IntroProps){

    const isDark = theme === 'dark'
    const isSpanish = language === 'spanish'
    const textColor = isDark ? 'text-white' : 'text-black'
    const btnHover = isDark ? "hover:bg-gray-300 hover:text-black" : "hover:bg-blue-300 hover:text-white"
    const btn = isDark ? "text-white rounded-xl p-2" : "text-black rounded-xl p-2"
    const text = isSpanish ? {
        heading: "Hola! Soy Judit 👋",
        description:
            "Soy una apasionada del desarrollo web que inició su camino de forma autodidacta. \nTras una carrera en el mundo de la fisioterapia, \nahora busco desarrollar todo mi potencial en el ámbito tecnológico!",
        button: "Ver proyectos",
    } : {
        heading: "Hi! I'm Judit 👋",
        description:
            "I am a passionate self-taught web developer. \nAfter a successful career in physiotherapy, \nI now aim to develop my full potential in the technological field!",
        button: "Check my projects!",
    }
    const imgClasses = "w-full border-2 rounded-full border-blue-400 bg-blue-200 ml-12 place-self-end"

    return( 
        <div className="h-full flex items-center justify-center">
            <div className="h-full mx-auto my-auto flex flex-col w-3/4 items-center gap-y-12">
                <div className="h-full mt-20 flex justify-between items-center w-full">
                    <div className={`text-left ${textColor}  xl:p-12`}>
                        <h1>{text.heading}</h1>
                        <h3 className="whitespace-pre-line xl:mt-12">{text.description}</h3>
                    </div>
                    <div className="hidden md:flex justify-items-end w-1/4">
                        <img src="\myAvatar.svg" alt="Foto de avatar" className={imgClasses}/>
                    </div>
                </div>
                <button className={`${btn} ${btnHover}`}>
                    <NavLink to='/projects'>{text.button}</NavLink>
                </button>
            </div>
        </div>
    );
}
    

export default Intro