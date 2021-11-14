import React from "react";
import Filter from "./Filter";
import './Filter.css' 

const checkboxes = [
    {
        name: "Libros",
        key: "book"
    },
    {
        name: "Elctronica",
        key: "electronic"
    },
    {
        name: "Culinaria",
        key: "cook"
    },
    {
        name: "Elctronica",
        key: "electronic"
    },
    {
        name: "Culinaria",
        key: "cook"
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