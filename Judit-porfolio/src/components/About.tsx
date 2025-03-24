
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
        <div className="flex align-middle">
            <div className="flex flex-col justify-center pt-8 ml-4 px-12 h-[80vh] w-1/2">
                <h1>{title}</h1>
                <p className={`text-md mt-4 leading-relaxed  ${textColor}`}>{description}</p>
            </div>
            
            <div className="flex justify-center items-center h-[80vh] w-1/2">
                <img className= "h-[80%] rounded-3xl" src="/foto.jpg" alt="Foto" />
            </div>
            
        </div>
        
    )
}

export default About