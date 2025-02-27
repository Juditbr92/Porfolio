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
        <div>
            {theme === 'light' && 
                <div className="absolute inset-0 z-10 h-full w-full bg-[#fafafa]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]"></div>
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
                <div className="absolute inset-0 z-10 h-full w-full bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
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
