import Menu from "./Menu";

type SidebarProps = {
    isOpen: boolean
}

function Sidebar({isOpen}: SidebarProps){

    return(
        <div className="absolute top-12 p-4">
            <Menu isOpen={isOpen}/>            
        </div>
    )
}

export default Sidebar