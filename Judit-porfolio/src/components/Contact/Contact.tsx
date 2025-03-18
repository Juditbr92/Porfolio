import ContactForm from "./ContactForm"


function Contact(){


    return(
        <div className="h-[80vh] w-[90vw] flex flex-col mx-auto">
            <h1 className="mt-8">¿Conectamos?</h1>
            <div className="flex h-full gap-12">
                <div className="flex flex-col w-1/2 my-auto gap-y-10">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ab voluptates tempore ducimus fugiat aliquam autem necessitatibus numquam voluptas natus eius, repellat asperiores nemo cum quidem eos, nisi molestias temporibus.</p>
                    <div className="flex h-16 items-center justify-items-center mx-auto gap-8">
                        <a href="https://github.com/Juditbr92">
                            <img className= "h-12 flex mx-auto justify-center" src="/toolkit/GitHub_Invertocat_Logo.svg.png" alt="Link a GitHub" />
                        </a>
                        <a href="www.linkedin.com/in/judit-bardon-r">
                            <img className="h-16" src="/linkedin-logo.png" alt="Link a LinkedIn" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-1/2">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact