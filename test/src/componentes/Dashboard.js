import React, {useState} from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../contexto/AuthContext'
import { Link, useNavigate } from "react-router-dom"

export default function Dashboard() {

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    async function handlelogout(){
        setError("")

        try{
            await logout()
            navigate("/login")

        } catch {
            setError("Fallo en el cierre de sesión")
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Perfil</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Correo:</strong>{currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                    Actualizar perfil
                </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handlelogout}>
                Cerrar Sesión
            </Button>    
            </div>  
        </>
    )
}
