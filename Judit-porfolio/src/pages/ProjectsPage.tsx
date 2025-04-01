
import { useContext } from "react";
import ProjectCard from "../components/ProjectCard"
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeProvider";


function ProjectsPage(){

    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    const projects = [
        {
        img: "/XperGG.png",
        title: "XperGG",
        description: language === 'spanish' ? "Red social centrada en los videojuegos. En la que puedes crear tu perfil para subir vídeos de tus mejores jugadas y comentar en las publicaciones de otros miembros. Además en el apartado 'hilos' podrás resolver todas tus dudas y proponer partidas." :
        "A community focused on video games, where you can create your own profile to upload videos of your best plays and comment on posts from other members. You can also use the threads section to solve your doubs and to start a game with members of the community!",
        technology: ["Angular", "Bootstrap", "MySQL"],
        gitHub: "https://github.com/tony1693/xpergg-front",
        video: "https://youtu.be/DcgEn2Jz-bE"
    },
    {   
        img: "/MyBookShelf.png",
        title: "MyBookShelf",
        description: language === 'spanish' ? "Aplicación para organizar y guardar tus lecturas. Puntúa los libros y guarda tus notas para revisar siempre que quieras" : "A desktop app to organize and save all your reads. Rate your books and keep track of them for whenever you want to revisit",
        technology: ["React", "Tailwind", "MySQL"],
        gitHub: "https://github.com/Juditbr92/MyBookShelf",
        video: "https://youtu.be/Oyz7XCswoqY"
    }
    ]
    


    return(
        <div className="w-full flex flex-col flex-grow border-2 md:border-orange-400 lg:border-green xl:border-black 2xl:border-purple-500">    
            {language === "spanish" && <h1 className="text-center mt-20 ml-12 sm:mt-22">Mis Proyectos</h1> || language === "english" && <h1>My Projects</h1>}
                <div className="flex flex-wrap justify-center gap-8 mt-4">
                    
                        {projects.map(project => {
                            return(
                                <div className="w-full md:w-[45%] px-4 relative group">
                                    <ProjectCard 
                                        theme = {theme}
                                        img = {project.img}
                                        title = {project.title}
                                        description = {project.description}
                                        technology={project.technology}
                                        gitHub={project.gitHub}
                                        video = {project.video}/>
                                </div>
                            )
                        })}
                </div>
        </div>
    )
}


    export default ProjectsPage