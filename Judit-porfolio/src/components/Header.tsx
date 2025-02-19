import Flags from "./Flags"
import Mode from "./Mode"

function Header(){

    return(
        <div>
            <div>
                <Flags />
            </div>
        
            <div className="absolute top-6 right-6 ">
                <Mode />
            </div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Header
