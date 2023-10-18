import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import MainLogo from '../Images/logo.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const Login = ({ setAuthenticated }) => {
    const [password,setPassword]=useState(false);
    const history = useNavigate();
    
    const showPassword = ()=>{
        let eye =document.getElementById("password");
        if(eye.type==="password"){
            eye.type = 'text';
            setPassword(true)
        }else{
            eye.type = 'password';
            setPassword(false)
        }
    }

    const handleLogin = () => {
        // Simulate authentication by setting authenticated to true.
        setAuthenticated(true);
    
        // You can also redirect the user to a different page after successful login.
        // For example, redirect to the admin dashboard ("/").
        history('/');
      };
  return (
    <Container  className='vh-100 d-flex flex-column flex-wrap-wrap justify-content-center align-items-center'>
        <Row>
            <Col>
            <img src={MainLogo} width={80} className="rounded-circle mb-3" alt="..."></img>
            </Col>
        </Row>
        <Row className='shadow p-3 mb-5 bg-body rounded d-flex flex-column justify-content-center align-items-center'>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
            <h5>Login</h5>
            <p className='text-secondary'>Access to our dashboard</p>
            </Col>
            <Col> 
            <Form className='d-flex flex-column justify-content-center'>
            <Form.Group>
                <Form.Label htmlFor='email'>Email*</Form.Label>
                <Form.Control type="email" size='md' id='email'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Row className='d-flex flex-row justify align-items-center'>
                    <Col className='d-flex flex-row justify-end align-items-center'>
                    <Form.Label htmlFor='password' className='d-flex flex-row justify-start'>password*</Form.Label>
                    </Col>
                    <Col>
                    <Link to={"/forgot"} className='d-flex flex-row justify-content-end text-secondary fs-10'style={{cursor:"pointer",textDecoration:"none"}}>Forgot password?</Link>
                    </Col>
                </Row>
                <Row className='d-flex flex-row justify-between align-items-center'>
                    <Col className='d-flex flex-row justify-content-end align-items-center'>
                    <Form.Control className='position-relative' type="password" size='md' id='password'></Form.Control>
                    <div className='position-absolute m-2 ' style={{cursor:"pointer"}} onClick={showPassword}>
                        {
                            !password?<AiOutlineEyeInvisible/>:<AiOutlineEye />
                        }
                    </div>
                    </Col>
                   
                </Row>
                
            </Form.Group>
            
            <Button className='mt-3 text-dark btn btn-outline-dark' style={{backgroundColor:"#00d4ff",outline:"none",border:"none"}} onClick={handleLogin}>Login</Button>
            <Row className='m-3'>
                <p>Don't have an account yet?<Link style={{textDecoration:"none"}} to={"/register"}>Register</Link></p>
            </Row>
        </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Login;
