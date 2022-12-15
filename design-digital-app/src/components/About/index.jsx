import React from "react";
import Card from "../Card";
import './about.css'

const About = (props) =>{
    return(
        <div className={props.isDarkTheme ? "about-dark about" : "about-light about"}>
            <div className="about-content">
                <h2>Experiências de Trabalho</h2>
                <p className="about-p">
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.
                </p>
                <div className="box-about">
                    <Card
                        isDarkTheme={props.isDarkTheme}
                        date="JUNHO 2012 - 2016"
                        skill="Web Designer"
                        company="Pied Piper StartUp."
                        desc="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores" />
                    <Card
                        isDarkTheme={props.isDarkTheme}
                        date="FEVEREIRO 2019 - 2021"
                        skill="Digital Consulting"
                        company="Arasaka Inc."
                        desc="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução" />
                
                    <Card
                        isDarkTheme={props.isDarkTheme}
                        date="FEVEREIRO 2019 - 2021"
                        skill="Digital Consulting"
                        company="Arasaka Inc."
                        desc="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução" />
                </div>
            </div>
        </div>
    )
}

export default About;