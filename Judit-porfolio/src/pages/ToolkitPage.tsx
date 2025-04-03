import { useContext } from "react";
import Toolkit from "../components/Toolkit";
import { LanguageContext } from "../context/LanguageContext";

function ToolkitPage(){

    const {language} = useContext(LanguageContext)
    const titleClasses = "mt-20 justify-center mx-auto mb-10"
    return(
        <div className="flex flex-col h-[80vh]">
            {language === "spanish" && <h1 className={titleClasses}>Mis Herramientas</h1>}
            {language === "english" && <h1 className={titleClasses}>My Toolkit</h1>}
            <div className="grid grid-cols-6 h-[70vh] w-[90vs] items-center justify-center center mx-auto my-auto">
                <Toolkit img="/toolkit/React.svg.png" name="React"/>
                <Toolkit img= "/toolkit/angular2-removebg-preview.png" name = "Angular" />
                <Toolkit img= "/toolkit/nodejs.png" name = "NodeJS" />
                <Toolkit img= "/toolkit/js.png" name = "JavaScript" />
                <Toolkit img= "/toolkit/Ts-removebg-preview.png" name = "TypeScript" />
                <Toolkit img= "/toolkit/html-removebg-preview.png" name = "HTML" />
                <Toolkit img= "/toolkit/css-removebg-preview.png" name = "CSS" />
                <Toolkit img= "/toolkit/GitHub_Invertocat_Logo.svg.png" name = "GitHub" />
                <Toolkit img= "/toolkit/mySql.png" name = "MySQL" />
                <Toolkit img= "/toolkit/Bootstrap_logo.svg.png" name = "Bootstrap" />
                <Toolkit img= "/toolkit/tailwind-removebg-preview.png" name = "Tailwind" />
                <Toolkit img= "/toolkit/motion-removebg-preview.png" name = "FramerMotion" />
            </div>
            
        </div>
        
    )
}

export default ToolkitPage