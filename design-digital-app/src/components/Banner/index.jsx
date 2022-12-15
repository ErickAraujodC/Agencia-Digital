import React from "react";
import './banner.css'

const Banner = (props) =>{
    return(
        <div className={props.isDarkTheme ? "banner-dark banner" : "banner-light banner"}>
            <div className="banner-img">
                <img src="../../src/assets/images/banner.png" alt="" className="banner" />
            </div>
            <div className={props.isDarkTheme ? "banner-dark-title banner-title" : "banner-light-title banner-title"}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>
                    Agência de Branding 
                </h1>
                <span>
                    e design digital
                </span>
            </div>
        </div>
    )
}

export default Banner;