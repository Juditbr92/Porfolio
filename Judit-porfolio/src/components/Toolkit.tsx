import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

type ToolkitProps = {
    img: string;
    name: string;
}

function Toolkit({img, name}: ToolkitProps){

    const {theme } = useContext(ThemeContext)

    return(
        <div className="h-max-[80vh] w-max-[90vw] flex items-center p-2">
            <div className="flex flex-col h-26 w-32 items-center justify-center center gap-4">
                {theme === 'dark' &&
                    <div className="border-2 border-gray-400 bg-gray-300 h-26 w-32 flex flex-col items-center center p-2 rounded-3xl gap-2">
                        <img src={img} alt="" className="h-1/2"/>
                        <p className="h-1/2">{name}</p>
                    </div>
                }  
                {theme === 'light' && 
                    <div className="border-2 border-blue-300 bg-blue-100 h-26 w-32 flex flex-col items-center center p-2 rounded-3xl gap-2">
                        <img src={img} alt="" className="h-1/2"/>
                        <p className="h-1/2">{name}</p>
                    </div>
                }
                
            </div>
        </div>
        
    )
}

export default Toolkit