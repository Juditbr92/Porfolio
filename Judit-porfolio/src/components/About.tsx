
type AboutProps = {
    language: 'spanish' | 'english',
    theme: 'dark' | 'light'
    title: string,
    description: string
}

function About({theme, title, description}: AboutProps){

    const isDark = theme === 'dark'
    const textColor = isDark ? 'text-white' : 'text-black'
    
    return(
        <div className="h-full flex flex-col align-middle">
            <h1 className="mt-20 mx-auto flex">{title}</h1>
            <div className="h-full w-[99vw] flex justify-between 2xl:ml-12 px-12 gap-4 items-center xl:gap-12">
                <p className={`text-base xl:text-lg 2xl:text-xl mt-4 leading-relaxed mb-4 md:max-w-[500px] xl:max-w-[800px] 2xl:min-w-[1/2] ${textColor}`}>{description}</p>
                <img className="hidden md:flex md:h-[50%] md:w-[50%] lg:mb-8 xl:min-h-[400px] xl:min-w-[400px] xl:max-w-[500px] rounded-3xl object-cover aspect-square"  
                    src="/Foto_perfil.jpg" alt="Foto" />
            </div>
            
        </div>
        
    )
}

export default About