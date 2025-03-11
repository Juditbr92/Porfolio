import { useContext } from "react"
import ProjectTypes from "../types/ProjectTypes"
import { LanguageContext } from "../context/LanguageContext"

function ProjectCard({theme, img, title, description, technology, gitHub, video}: ProjectTypes){
    const {language } = useContext(LanguageContext)

    const isDark = theme === 'dark'
    const textColor = isDark ? 'text-black' : 'text-white'
    const technologyColor = `border-1 border-blue-200 bg-white text-black px-2 rounded-2xl`
    const buttonColor = isDark ? "border-1 border-blue-200 bg-gray-600 text-white mt-2 py-1 px-2 rounded-2xl hover:bg-blue-200 hover:text-black" : "border-1 border-blue-200 bg-blue-200 text-gray-800 mt-2 py-1 px-2 rounded-2xl hover:bg-gray-600 hover:text-white"
    const hover = isDark ? "absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity" : " absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity bg-black"
    const imgClass = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.3s ease-in-out',
        minHeight: '300px', 
    };

    return(
        <div>
        {/* Imagen de fondo */}
            <div style={imgClass} className="relative">
                 {/* Capa negra semi-transparente al hacer hover */}
                <div className={hover}></div>
            </div>

            {/* Contenido */}
                <div className="absolute inset-0 flex flex-col text-xl items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h2 className={`mt-6 text-3xl tracking-widest ${textColor}`}>{title}</h2>
                    <p className={`text-sm mx-4 mt-4 text-center tracking-wide ${textColor}`}>{description}</p>
                
            {/* Tecnologias */}
                <div className="flex gap-12 mt-8 text-sm">
                    {technology.map((tech, index) => (
                        <p key = {index} className={technologyColor}> {tech}</p>
                    ))}        
                </div>

            {/* Botones */}
                <div className="flex gap-12 mt-4 text-md">
                    <button className= {buttonColor}>
                        <a href={gitHub}>GitHub</a>
                    </button>

                        <button className= {buttonColor}>
                            {language === "spanish" && 
                            <div>
                                <a href={video}>Ver</a>
                            </div> || language === "english" && <div>
                                <a href={video}>View</a>
                            </div>
                            }
                        </button>
                    </div>
                </div>                             
        </div>

    )
}

export default ProjectCard