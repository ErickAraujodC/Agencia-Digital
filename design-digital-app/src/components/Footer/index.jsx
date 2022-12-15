import React from "react";
import './footer.css'

const Footer = (props) => {
    return(
        <footer className={props.isDarkTheme ? "footer-dark" : "footer-light"}>
            <p>Copyright 2022 @ <span>Erick Araujo de Carvalho</span></p>
        </footer>
    )
}

export default Footer;