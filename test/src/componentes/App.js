import React, {useState, useEffect} from "react"
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
import Fetch from "./links/Fetch"
import ArticleDescrip from "./articleDescrip/ArticleDescrip"
// import db from '../firebase'

function App() {

  const [info, setInfo] = useState([])

  
  return(
          <div>
          <Router>
          <AuthProvider>
          <NavbarComp/>
          <div> 
          <Routes>

                <Route exact path='/inicio' element={<Inicio setInfo={setInfo}  />}/>
                <Route exact path='/' element={<Inicio setInfo={setInfo} />}/> 
              <Route exact path="/agregar" element={<Fetch/>} />
              <Route exact path="/article/:id" element={<ArticleDescrip info={info}/>} />
  

          </Routes>
          </div> 
            
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>      
              <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/update-profile' element={<UpdateProfile/>}/>
              </Route>
              <Route exact path='/dashboard' element={<Dashboard/>}/>
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/forgot-password" element={<ForgotPassword/>} />
              
          </Routes>
           </div>
          </Container> 
          </AuthProvider>
           </Router>
          </div>
        
     
    
  ) 
}


export default App;
