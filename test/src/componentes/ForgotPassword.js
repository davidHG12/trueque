import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from '../contexto/AuthContext'
import { Link } from "react-router-dom"

export default function ForgotPassword() {
    const emailRef=useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Revisa tu correo y sigue las instrucciones")
        }catch{
            setError("Fallo en restablecimiento de la contraseña")
        }
        setLoading(false)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Restablecer contraseña</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <br/>
                        <Button disabled={loading} className="w-100" type="submit">Restablecer contraseña</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        <Link to="/login">Iniciar sesión</Link>
                    </div>  
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                ¿No tienes una cuenta? <Link to="/signup">Registrate</Link>
            </div>
        </>
    )
}