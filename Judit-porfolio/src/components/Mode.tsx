import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";

function Mode() {
  // funcion para controlar el estado de si el boton ha sido clickado para que cambie la opacidad, y para que cambie el modo light a dark

  const [mode, setMode] = useState("light"); // predeterminado es modo ligh

  // cambiar el estado de isClicked al hacer clic
    const handleClick = (newMode: string) => {
        setMode(newMode);
    };

        useEffect(() => {
            if (mode === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
    }, [mode]);

    const buttonClasses = "m-1 hover:cursor-pointer";

    return (
        <div className="flex w-1/3 h-10 gap-2">
            <motion.button
                initial={{ opacity: 0.5 }}
                animate={{
                opacity: mode === "light" ? 1 : 0.3,
                }}
                whileHover={{
                    opacity: 1,
                    scale: 1.2,
                }}
                whileTap={{
                    scale: 0.9,
                }}
            className={buttonClasses}
            onClick={() => handleClick("light")}><FaRegLightbulb /></motion.button>

            <motion.button
                initial={{ opacity: 0.5 }}
                animate={{
                opacity: mode === "dark" ? 1 : 0.3,
                }}
                whileHover={{
                    opacity: 1,
                    scale: 1.2,
                }}
                whileTap={{
                    scale: 0.9,
                }}
            className={buttonClasses}
            onClick={() => handleClick("dark")}> <IoMdMoon /> </motion.button>
        </div>
        );
    }

export default Mode;
