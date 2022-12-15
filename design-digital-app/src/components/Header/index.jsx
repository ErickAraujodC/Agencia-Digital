import React from "react";
import './header.css'

const Header = (props) =>{
    return(
        <header className={props.isDarkTheme ? "header-dark" : "header-light"}>
            <img className="logo" src="../../src/assets/images/logo.png" alt="Logo" />
            
            <button onClick={props.changeTheme}>
                <img className="theme-logo"  src={props.isDarkTheme ? "../../src/assets/images/sun.png" : "../../src/assets/images/moon.png" } alt="Imagem tema" />
            </button>
        </header>
    )
}

export default Header;