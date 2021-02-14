import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Logo from '../../Assets/Logo.svg'
import { useHistory } from "react-router-dom";


export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="grid-container-login">
      <div className="Image-login" style={{backgroundImage:`url(${Logo})`}}>
      </div>
      <div className="Login-login">
          <Form onSubmit={handleSubmit}>
            <Form.Label className='header'>ΣΥΝΔΕΣΗ</Form.Label>
              <Form.Group size="lg" controlId="email" className='text-center'>
                <Form.Label >Δ/νση ηλεκτρονικού ταχυδρομείου</Form.Label>
                <Form.Control
                  className='email'
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password" className='text-center'>
                <Form.Label>Κωδικός πρόσβασης</Form.Label>
                <Form.Control
                  className='password'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button block size="lg" type="submit" disabled={!validateForm()} className='button' onClick={()=>{history.push('/Web')}}>
                Είσοδος
              </Button>
          </Form>
        </div>
    </div>
  );
}