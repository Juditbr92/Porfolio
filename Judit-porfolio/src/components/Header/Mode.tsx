import { useContext } from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from "../../context/ThemeProvider";


function Mode() {
    
    const { theme } = useContext(ThemeContext);
    const { toggleTheme } = useContext(ThemeContext)

    if (!ThemeContext) {
        throw new Error("Mode debe usarse dentro de un ThemeProvider");
    }

    const buttonClasses = "m-1 hover:cursor-pointer";

    return (
        <div>
            {theme === 'light' && 
            <div className="flex w-1/3 h-10 gap-2">
                <motion.button
                    initial={{ opacity: 0.5}}
                    animate={{
                    opacity: theme === "light" ? 1 : 0.3,
                    color: theme === "light" ? "#050505" : "#e6e6d3" 
                    }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.2,
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                className={buttonClasses}
                onClick={toggleTheme}><FaRegLightbulb /></motion.button>
                <motion.button
                    initial={{ opacity: 0.5 }}
                    animate={{
                    opacity: theme === "light" ? 0.3 : 1,
                    color: theme === "light" ? "#a4a4a3" : "#fffff9" 
                    }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.2,
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                className={buttonClasses}
                onClick={toggleTheme}> <IoMdMoon /> </motion.button>
            </div>
            }    

    {theme === 'dark' && 
            <div className="flex w-1/3 h-10 gap-2">
                <motion.button
                    initial={{ opacity: 0.5}}
                    animate={{
                    opacity: theme === "dark" ? 0.3 : 1,
                    color: theme === "dark" ? "#ffffe4 " : "#e6e6d3" 
                    }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.2,
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                className={buttonClasses}
                onClick={toggleTheme}><FaRegLightbulb /></motion.button>
                <motion.button
                    initial={{ opacity: 0.5 }}
                    animate={{
                    opacity: theme === "dark" ? 1 : 0.3,
                    color: theme === "dark" ? "#ffffe4" : "#fffff9" 
                    }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.2,
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                className={buttonClasses}
                onClick={toggleTheme}> <IoMdMoon /> </motion.button>
            </div>
            }    
        </div>
        );
    }

export default Mode;
