import React from "react";
import './header.css';
import logo from "../../assets/images/logo.png";
import sun from "../../assets/images/sun.png"
import moon from "../../assets/images/moon.png"

const Header = (props) =>{
    return(
        <header className={props.isDarkTheme ? "header-dark" : "header-light"}>
            <img className="logo" src={logo} alt="Logo" />
            
            <button onClick={props.changeTheme}>
                <img className="theme-logo"  src={props.isDarkTheme ? {sun} : {moon} } alt="Imagem tema" />
            </button>
        </header>
    )
}

export default Header;