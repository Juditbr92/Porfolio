


function ProjectCard(){

    // const isDark = theme === 'dark'
    // const isSpanish = language === 'spanish'
    // const textColor = isDark ? 'text-white' : 'text-black'
    const technologyColor = "border-1 border-blue-200 bg-white text-black px-2 rounded-2xl"
    const buttonColor = "border-1 border-blue-200 bg-blue-200 text-gray-800 py-1 px-2 rounded-2xl hover:bg-gray-600 hover:text-white"

    return(
        <div className="h-[80vh] w-full flex flex-col items-center">    
            <h1>Mis Proyectos</h1>

            {/* Box for the project */}
            <div className="flex w-full h-full items-center gap-8">
                <div className="h-2/3 w-1/2 ml-8 relative group">

            {/* Imagen de fondo */}
                <div className="h-full w-full bg-[url('/XperGG.png')] bg-cover bg-center transition-all group-hover:brightness-50">
                     {/* Capa negra semi-transparente al hacer hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                </div>

                {/* Contenido */}
                    <div className="absolute inset-0 flex flex-col text-xl items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <h2 className="mt-6 text-3xl">XperGG</h2>
                        <p className="text-sm mx-4 mt-4 text-center tracking-wide">Red social centrada en los videojuegos.
                        En la que puedes crear tu perfil para subir vídeos de tus mejores jugadas y comentar en las publicaciones de otros miembros.
                        Además en el apartado "hilos" podrás resolver todas tus dudas y proponer partidas.</p>

                    {/* Tecnologias */}
                        <div className="flex gap-12 mt-8 text-sm">
                            <p className={technologyColor}>Angular</p>
                            <p className={technologyColor}>Bootstrap</p>
                            <p className={technologyColor}>MySQL</p>
                        </div>

                    {/* Botones */}
                        <div className="flex gap-12 mt-4 text-md">
                            <button className= {buttonColor}>
                                <a href="">GitHub</a>
                            </button>

                            <button className= {buttonColor}>
                                <a href="">Ver</a>
                            </button>
                        </div>
                    </div>
                
                
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard