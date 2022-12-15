import React from "react";
import './card.css'

const Card = (props) =>{
    return(
        <div className={props.isDarkTheme ? "card-dark card" : "card-light card"}>
            
            <div className="card-header">
                <p>{props.date}</p>
                <h3>{props.skill}</h3>
                <p>{props.company}</p>
            </div>
            
            <p className="card-desc">{props.desc}</p>
        </div>
    )
}

export default Card;