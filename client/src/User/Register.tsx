import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import './Login.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [confirm, setConfirm] = useState("");

     async function handleSubmit(e : any){
      e.preventDefault();
      const register = {     
          username,
          phone,
          password,
          confirm,
          email,
      }
      axios.post('http://localhost:6000/app/register' , register)
      .then(response => console.log(response.data))

      setUsername(" ")
      setConfirm(" ")
      setEmail("")
      setPhone( "")
      setPassword(" ")
     
      
     }


  return (
    <>
      
      <div className="cont">
        <Form className="form1">
          <h3 className="sign">Signup</h3>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              className="formcontrol"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="number"
              className="formcontrol"
              placeholder="Enter Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              className="formcontrol"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email Address"
              value={email}
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>
      

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="password"
              className="formcontrol"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="password"
              className="formcontrol"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
          <p className="forgot-password text-right">
            Already Registered <Link to={"/"}>login</Link>
          </p>
        </Form>
        <img src="/Assets/Images/signupimg.svg" className="image123" alt="" />
      </div>
    </>
  );
};

export default Register;
