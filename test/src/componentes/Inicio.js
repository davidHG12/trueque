import React from 'react'
import Cards from "./Card/Cards";
import Filters from "./Filter/Filters"
import { Container } from "react-bootstrap"
import './app.css'

export default function Inicio() {
    return (
        <div className="container">
            <div className="container-filters"><Filters/></div>  
            <div><Cards/> </div>   
        </div>
    )
}
