import Menu from "./Menu";

type SidebarProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void
}

function Sidebar({isOpen, setIsOpen}: SidebarProps){

    return(
        <div className="absolute h-full w-full">
            <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>            
        </div>
    )
}

export default Sidebar