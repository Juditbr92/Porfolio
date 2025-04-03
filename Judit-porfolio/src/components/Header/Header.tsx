import { useContext, useState } from "react"
import Flags from "./Flags"
import Mode from "./Mode"
import { ThemeContext } from "../../context/ThemeProvider"
import { RxHamburgerMenu } from "react-icons/rx"
import Sidebar from "./Sidebar"

function Header(){

    const { theme } = useContext(ThemeContext)
    const [isOpen, setIsOpen ] = useState(false)

    return(
        <div className="top-0 left-0 w-full z-20 shadow-md ">
            {theme === 'light' && 
                <div>
                    <div>
                        <Flags />
                    </div>

                    <div className="absolute top-6 right-16 flex gap-12">
                        <Mode />
                        <button 
                            className="hover:cursor-pointer text-xl"
                            onClick={() => setIsOpen(!isOpen)}><RxHamburgerMenu/> </button>
                            {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
                    </div>

                </div>
                }
            
            {theme === 'dark' && 
                <div>
                    <div>
                        <Flags />
                    </div>

                    <div className="absolute top-6 right-16 flex gap-12">
                        <Mode />
                        <button 
                            className="hover:cursor-pointer text-xl text-white"
                            onClick={() => setIsOpen(!isOpen)}><RxHamburgerMenu/> </button>
                            {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>}
                    </div>
                </div>
        }  
        </div>
    )
}

export default Header
