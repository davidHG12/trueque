import React from 'react'
import { Link } from 'react-router-dom'
import './links.css'
const AddArticle = () => {
    return (
        <div className='add__article d-flex justify-content-center align-items-center'>
            <Link to='/agregar'><i className="fas fa-plus icon-add"/></Link>
        </div>
    )
}

export default AddArticle
