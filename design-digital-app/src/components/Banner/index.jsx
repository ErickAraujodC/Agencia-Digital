import React from "react";
import './banner.css';
import img_banner from '../../assets/images/banner.png'

const Banner = (props) =>{
    return(
        <div className={props.isDarkTheme ? "banner-dark banner" : "banner-light banner"}>
            <div className="banner-img">
                <img src={img_banner} alt="" className="banner" />
            </div>
            <div className={props.isDarkTheme ? "banner-dark-title banner-title" : "banner-light-title banner-title"}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>
                    Agência de Branding 
                </h1>
                <span>
                    e design digital
                    Desenvolvido por Erick Carvalho
                </span>
            </div>
        </div>
    )
}

export default Banner;