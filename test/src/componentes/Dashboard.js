import React, {useState} from 'react'
import { Card, Alert } from "react-bootstrap"
import { useAuth } from '../contexto/AuthContext'
import { Link, Navigate } from "react-router-dom"

export default function Dashboard() {

    const {error} = useState("")
    const {currentUser} = useAuth()

    return (
        <>
        {currentUser ? <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Perfil</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Correo:</strong>{currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                    Actualizar perfil
                </Link>
                </Card.Body>
            </Card>: <Navigate to="/inicio"/>}
            
        </>
    )
}
