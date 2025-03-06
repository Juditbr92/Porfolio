import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeProvider"
import { IoCloseCircleOutline } from "react-icons/io5";
import { LanguageContext } from "../../context/LanguageContext";

type MenuProps={
    isOpen?: boolean;
    setIsOpen: (open: boolean) => void;
}

function Menu(props: MenuProps){

    const { theme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)

    const {isOpen, setIsOpen} = props
    
    function closeSidebar(){
        setIsOpen(false)
    }
    if (!isOpen) return null

    return(
        <div>
            {isOpen && (
                <div
                    className={`fixed inset-0 flex items-center justify-center 
                        ${theme === "dark" ? "bg-gray-500 text-white" : "bg-blue-200 text-black"}`}
                >
                    <div className={`flex flex-col gap-4 w-auto p-4  text-xl ${theme === "dark" ? "bg-gray-500" : "bg-blue-200"}`}>
                        <div className="flex flex-col gap-16">
                            <button 
                                className={`absolute top-10 right-16 text-2xl hover:cursor-pointer ${theme === "dark" ? "text-white hover:text-black": "text-black hover:text-white"}`}
                                onClick={closeSidebar}><IoCloseCircleOutline /></button>
                            { language==='spanish' && 
                                <div className="flex flex-col text-black ml-2 px-2 py-2 gap-6 mt-2">
                                    <NavLink className={`hover:underline hover:underline-offset-2 ${theme === "dark" ? "text-white hover:text-black": "text-black hover:text-white"}`} to="">Mis Proyectos</NavLink>
                                    <NavLink className={`hover:underline hover:underline-offset-2 ${theme === "dark" ? "text-white hover:text-black" : "text-black hover:text-white"}`} to="">Sobre mí</NavLink>
                                    <NavLink className={`hover:underline hover:underline-offset-2 ${theme === "dark" ? "text-white hover:text-black" : "text-black hover:text-white"}`} to="">Mis herramientas</NavLink>
                                    <NavLink className={`hover:underline hover:underline-offset-2 ${theme === "dark" ? "text-white hover:text-black" : "text-black hover:text-white"}`} to="">Contacto</NavLink>
                                </div>
                            }

                            { language==='english' && 
                                <div className="flex flex-col text-black ml-2 px-2 py-2 gap-6 mt-2">
                                    <NavLink className={`hover:underline hover:underline-offset-2 ${theme === "dark" ? "text-white hover:text-black": "text-black hover:text-white"}`} to="">Check my projects</NavLink>
                                    <NavLink className={`hover:underline hover:underline-offset-2 ${theme === "dark" ? "text-white hover:text-black" : "text-black hover:text-white"}`} to="">About me</NavLink>
                                    <NavLink className={`hover:underline hover:underline-offset-2 ${theme === "dark" ? "text-white hover:text-black" : "text-black hover:text-white"}`} to="">My Toolkit</NavLink>
                                    <NavLink className={`hover:underline hover:underline-offset-2 ${theme === "dark" ? "text-white hover:text-black" : "text-black hover:text-white"}`} to="">Contact</NavLink>
                                </div>
                            }
                            
                            
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    );
}
export default Menu
