import React from 'react'
import Cards from "./Card/Cards";
import Filters from "./Filter/Filters"
import './app.css'

export default function Inicio() {
    return (
        <div className="container">
            <div className="container-filters"><Filters/></div>  
            <div className="container-cards"><Cards/> </div>   
        </div>
    )
}
