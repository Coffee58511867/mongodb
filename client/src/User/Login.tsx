import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <>
     
      <div className="cont">
        <Form className="form1">
          <h3 className="sign2">Signin</h3>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              className="formcontrol"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="password"
              className="formcontrol"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right">
            Not Registered <Link to={"/register"}>Sign up</Link>
          </p>
        </Form>
        <img src="/Assets/Images/signupimg.svg" className="image1" alt="" />
      </div>
    </>
  );
};

export default Login;
