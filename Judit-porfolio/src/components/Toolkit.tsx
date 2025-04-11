import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { ToolkitArray } from "../types/ToolkitArray"


    function Toolkit() {
        const { theme } = useContext(ThemeContext);
        
        return (
            <>
                {ToolkitArray.map(tool => (
                    <div
                        key={tool.title}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl shadow-md
                        w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
                        ${theme === 'dark' ? 'bg-gray-300 border border-gray-400' : 'bg-white'}`}>

                        <img src={tool.image} alt={tool.title} className="h-2/3 object-contain" />
                        <p className="text-xs sm:text-sm mt-2 text-center">{tool.title}</p>
                    </div>
                ))}
            </>
        );
    }

    
export default Toolkit