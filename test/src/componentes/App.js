import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import {AuthProvider} from '../contexto/AuthContext'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import NavbarComp from "./NavbarComp"
import Inicio from "./Inicio"

function App() {
  return(
    <Router>
    <div>
      <NavbarComp/>
 
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<Dashboard/>}/>
              </Route>
              <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/update-profile' element={<UpdateProfile/>}/>
              </Route>
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/forgot-password" element={<ForgotPassword/>} />
              <Route path='/Inicio' element={<Inicio/>}/>
            </Routes>
          </AuthProvider>

      </div>
    </Container>    
    </div>
            </Router>
    
  ) 
}


export default App;
