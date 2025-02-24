import { useContext } from "react"
import Flags from "./Flags"
import Mode from "./Mode"
import { ThemeContext } from "../context/ThemeProvider"

function Header(){

    const { theme } = useContext(ThemeContext)

    return(
        <div>
            {theme === 'light' && 
                <div className="absolute inset-0 z-10 h-full w-full bg-[#fafafa]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]"></div>
                    <div>
                        <Flags />
                    </div>

                    <div className="absolute top-6 right-6 ">
                        <Mode />
                    </div>
                </div>
                }
            
            {theme === 'dark' && 
                <div className="absolute inset-0 z-10 h-full w-full bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div>
                        <Flags />
                    </div>

                    <div className="absolute top-6 right-6 ">
                        <Mode />
                    </div>
                </div>
        }
        
        
            
        </div>
    )
}

export default Header
