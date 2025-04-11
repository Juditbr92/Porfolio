import { useContext } from "react";
import Toolkit from "../components/Toolkit";
import { LanguageContext } from "../context/LanguageContext";

function ToolkitPage(){

    const {language} = useContext(LanguageContext)
    const titleClasses = "mt-20 justify-center mx-auto mb-10"
    return(
        <div className="flex flex-col h-full mb-8">
            {language === "spanish" && <h1 className={titleClasses}>Mis Herramientas</h1>}
            {language === "english" && <h1 className={titleClasses}>My Toolkit</h1>}
            <div className="flex flex-wrap justify-center h-full w-[90vs] gap-6">
                <Toolkit />
            </div>
            
        </div>
        
    )
}

export default ToolkitPage