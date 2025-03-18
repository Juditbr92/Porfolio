import { useState } from "react"
import emailjs from '@emailjs/browser'
import React from "react"
import { toast } from "react-toastify"


function ContactForm(){
    const [name, setName ] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // EmailJS variables:
        const serviceId = "service_2i2gyc6";
        const templateId = "template_m21gxxv"
        const publicKey = "HQDLJFRXV4olnCi6K"

        // create object that contains dynamic template params: 
        const templateParams = {
            name: name,
            email_id: email,
            message: message
        }

        // Send email using EmailJs: es una función asíncrona:
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully",response)
                toast.success("Email enviado correctamente")
                setName('');
                setEmail('');
                setMessage('')
                

            })
            .catch((error) => {
                console.log(error)
                toast.error("Error al enviar el mensaje")
            })
    }

    return( 
        <div>   
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4">
                        <input 
                            placeholder= "Name"
                            type="text"
                            className="border-2 border-blue-300 rounded-2xl p-2"
                            value = {name}
                            onChange={(e) => {setName(e.target.value)}}
                        />

                        <input 
                            placeholder = "Email"
                            type= "email"
                            className="border-2 border-blue-300 rounded-2xl p-2"
                            value = {email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />

                        <textarea  
                            placeholder = "Mensaje"
                            className="border-2 border-blue-300 rounded-2xl p-2 max-h-[150px] min-h-[140px]"
                            value = {message}
                            onChange={(e) => {setMessage(e.target.value)}}
                        />
                    </div>
                    
                    <button type= "submit" className="border-2 border-blue-500 mt-4 p-2 rounded-2xl w-1/2 hover:bg-blue-300 hover:text-white">Enviar</button>
                </div>
                
            </form>
        </div>
    )
}

export default ContactForm