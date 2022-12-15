import React from "react";
import './contact.css'



const Contact = (props) =>{
    return(
        <div className={props.isDarkTheme ? "contact-dark contact" : "contact-light contact"}>
            <img src="../../src/assets/images/logo.png" alt="Logo" className="logo" />

            <p className="contact-p"> 
                Ajudamos a criar uma personalidade digital construindo sua marca no
                ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.
            </p>

            <nav className="logo-links">
                <a href="www.facebook.com" target="_blank">
                    <img className="logo-social-net" src="../../src/assets/images/facebook.png" alt="Logo Rede Social" />
                </a>
                <a href="www.twitter.com" target="_blank">
                    <img className="logo-social-net" src="../../src/assets/images/twitter.png" alt="Logo Rede Social" />
                </a>
                <a href="www.behance.net" target="_blank">
                    <img className="logo-social-net" src="../../src/assets/images/behance.png" alt="Logo Rede Social" />
                </a>
                <a href="www.linkedin.com" target="_blank">
                    <img className="logo-social-net" src="../../src/assets/images/linkedin.png" alt="Logo Rede Social" />
                </a>
                <a href="www.dribble.com" target="_blank">
                    <img className="logo-social-net" src="../../src/assets/images/dribble.png" alt="Logo Rede Social" />
                </a>
            </nav>
        </div>
    )
}

export default Contact;