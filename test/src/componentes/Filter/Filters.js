import React from "react";
import Filter from "./Filter";
import './Filter.css' 

const checkboxes = [
    {
        name: "Libros",
        key: "book"
    },
    {
        name: "Electrónica",
        key: "electronic"
    },
    {
        name: "Gastromía",
        key: "cook"
    },
    {
        name: "Deportes",
        key: "sports"
    },
    {
        name: "Informática",
        key: "inf"
    },
    {
        name: "Clases",
        key: "class"
    },
    {
        name: "Ciencia",
        key: "science"
    }
]

function Filters(){
return (
    <div className = "checkbox-container">
            {checkboxes.map(item => (<Filter label={item.name} value={item.checkeds} onChange={item.checkeds} />))}
            </div>
);
}

export default Filters;