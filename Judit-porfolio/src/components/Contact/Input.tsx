
type ContactFormProps = {
    placeholder: string;
    type: string;
}

function Input({placeholder, type}: ContactFormProps){

    return(
        <div>
            <input 
                type = {type}
                placeholder={placeholder}
                />
        </div>
    )
}

export default Input