
import { useContext } from "react";
import ProjectCard from "../components/ProjectCard"
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeProvider";


function ProjectsPage(){

    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    const projectXperGG = {
        img: "/XperGG.png",
        title: "XperGG",
        description: language === 'spanish' ? "Red social centrada en los videojuegos. En la que puedes crear tu perfil para subir vídeos de tus mejores jugadas y comentar en las publicaciones de otros miembros. Además en el apartado 'hilos' podrás resolver todas tus dudas y proponer partidas." :
        "A community focused on video games, where you can create your own profile to upload videos of your best plays and comment on posts from other members. You can also use the threads section to solve your doubs and to start a game with members of the community!",
        technology: ["Angular", "Bootstrap", "MySQL"],
        gitHub: "https://github.com/tony1693/xpergg-front",
        video: "https://www.youtube.com/watch?v=QH0t_ogClhA&ab_channel=ADHDFocusClub%F0%9F%92%AD"
    };

    const projectMyBookShelf = {
        img: "/MyBookShelf.png",
        title: "MyBookShelf",
        description: language === 'spanish' ? "Aplicación para organizar y guardar tus lecturas. Puntúa los libros y guarda tus notas para revisar siempre que quieras" : "A desktop app to organize and save all your reads. Rate your books and keep track of them for whenever you want to revisit",
        technology: ["React", "Tailwind", "MySQL"],
        gitHub: "https://github.com/Juditbr92/MyBookShelf",
        video: "https://www.youtube.com/watch?v=QH0t_ogClhA&ab_channel=ADHDFocusClub%F0%9F%92%AD"
    }


    return(
        <div className="h-[80vh] w-full flex flex-col items-center">    
            {language === "spanish" && <h1>Mis Proyectos</h1> || language === "english" && <h1>My Projects</h1>}
                <div className="flex w-full h-full gap-8 mt-8">
                    <div className="h-2/3 w-1/2 mx-8 relative group">
                        <ProjectCard
                            theme = {theme}
                            img={projectXperGG.img}
                            title={projectXperGG.title}
                            description={projectXperGG.description}
                            technology={projectXperGG.technology}
                            gitHub= {projectXperGG.gitHub}
                            video = {projectXperGG.video}
                        />
                    </div>

                    <div className="h-2/3 w-1/2 mx-8 relative group">
                        <ProjectCard
                            theme = {theme}
                            img={projectMyBookShelf.img}
                            title={projectMyBookShelf.title}
                            description={projectMyBookShelf.description}
                            technology={projectMyBookShelf.technology}
                            gitHub= {projectMyBookShelf.gitHub}
                            video = {projectMyBookShelf.video}
                        />
                    </div>
            </div>
    </div>

    )
}


    export default ProjectsPage