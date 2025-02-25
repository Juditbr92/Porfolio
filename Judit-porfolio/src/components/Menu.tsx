import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../context/ThemeProvider"


type MenuProps={
    isOpen?: boolean
}

function Menu(props: MenuProps){

    const { theme } = useContext(ThemeContext)

    const {isOpen} = props
    const linkClasses = "ml-2 px-2 py-2 mt-2 hover:underline hover:underline-offset-2"

    return(
        <div>
            {isOpen && (
                <div
                    className={`flex flex-col justify-items-stretch w-32 gap-4 2xl:gap-12 2xl:text-xl 2xl:mr-20 
                        ${theme === "dark" ? "bg-transparent text-white" : "bg-white text-black"}`}
                >
                    <div className={`flex flex-col gap-4 w-auto p-4 ${theme === "dark" ? "bg-transparent" : "bg-gray-50"}`}>
                        <NavLink className={linkClasses} to="">Mis Proyectos</NavLink>
                        <NavLink className={linkClasses} to="">Tecnologías</NavLink>
                        <NavLink className={linkClasses} to="">Mis herramientas</NavLink>
                        <NavLink className={linkClasses} to="">Contacto</NavLink>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Menu
