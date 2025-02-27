import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeProvider"
import { IoCloseCircleOutline } from "react-icons/io5";

type MenuProps={
    isOpen?: boolean;
    setIsOpen: (open: boolean) => void;
}

function Menu(props: MenuProps){

    const { theme } = useContext(ThemeContext)

    const {isOpen, setIsOpen} = props
    const linkClasses = " hover:underline hover:underline-offset-2 hover:text-white"
    
    function closeSidebar(){
        setIsOpen(false)
    }
    if (!isOpen) return null

    return(
        <div>
            {isOpen && (
                <div
                    className={`fixed inset-0 flex items-center justify-center 
                        ${theme === "dark" ? "bg-transparent text-white" : "bg-blue-200 text-black"}`}
                >
                    <div className={`flex flex-col gap-4 w-auto p-4 ${theme === "dark" ? "bg-transparent" : "bg-blue-200"}`}>
                        <div className="flex flex-col gap-16">
                            <button 
                                className="absolute top-10 right-16 text-2xl hover:text-white hover:cursor-pointer"
                                onClick={closeSidebar}><IoCloseCircleOutline /></button>
                            <div className="flex flex-col text-black ml-2 px-2 py-2 gap-6 mt-2">
                                <NavLink className={linkClasses} to="">Mis Proyectos</NavLink>
                                <NavLink className={linkClasses} to="">Tecnologías</NavLink>
                                <NavLink className={linkClasses} to="">Mis herramientas</NavLink>
                                <NavLink className={linkClasses} to="">Contacto</NavLink>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    );
}
export default Menu
