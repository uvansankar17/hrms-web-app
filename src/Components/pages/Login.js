import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainLogo from "../Images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Formik } from "formik";
import { LogAndRegSchema } from "./Forms/Validations/LoginValidation";
import TextInput from "../TextInput";

const Login = ({ setAuthenticated }) => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const showPassword = () => {
    let eye = document.getElementById("password");
    if (eye.type === "password") {
      eye.type = "text";
      setPasswordIcon(true);
    } else {
      eye.type = "password";
      setPasswordIcon(false);
    }
  };

  const handleLogin = () => {
    
    // Simulate authentication by setting authenticated to true.
    setAuthenticated(true);
    console.log("Email : " + email);
    console.log("Password : " + password);
    setEmail("");
    setPassword("");
    history("/");
  };
  return (
    <Container className="vh-100 d-flex flex-column flex-wrap-wrap justify-content-center align-items-center">
      <Row>
        <Col>
          <img
            src={MainLogo}
            width={80}
            className="rounded-circle mb-3"
            alt="..."
          ></img>
        </Col>
      </Row>
      <Row className="shadow p-3 mb-5 bg-body rounded d-flex flex-column justify-content-center align-items-center">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h5>Login</h5>
          <p className="text-secondary">Access to our dashboard</p>
        </Col>
        <Col>
          <Formik
            initialValues={initialValues}
            validationSchema={LogAndRegSchema}
            onSubmit={handleLogin}
            
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,

             
            }) => (
              <Form className="d-flex flex-column justify-content-center">
                <TextInput
                   htmlFor="email"
                   label={'Email*'}
                    name="email"
                    type="email"
                    size="md"
                    id="email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    onChange={(e) => {
                      setEmail(e.target.value.trim());
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  
                  validation={touched.email && errors.email ? (
                    <p className="text-danger">{errors.email}</p>
                  ) : (
                    ""
                  )}
                    />
                  <Row className="d-flex flex-row justify align-items-center">
                    <Col className="d-flex flex-row justify-end align-items-center">
                      <Form.Label
                        htmlFor="password*"
                        className="d-flex flex-row justify-start"
                      >
                        password*
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row className="d-flex flex-row justify-between align-items-center">
                    <Col className="d-flex flex-row justify-content-end align-items-center">
                      <Form.Control
                        name="password"
                        type="password"
                        size="md"
                        id="password"
                        className={`position-relative form-control ${
                          touched.password && errors.password
                            ? "border-danger"
                            : ""
                        }`}
                        onChange={(e) => {
                          setPassword(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      <div
                        className="position-absolute m-2 pointer"
                        onClick={showPassword}
                      >
                        {!passwordIcon ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </div>
                    </Col>
                  </Row>
                  {touched.password && errors.password ? (
                    <p className="text-danger">{errors.password}</p>
                  ) : (
                    ""
                  )}
                

                <Button
                  className="mt-3 text-dark btn btn-outline-dark border-none outline-none"
                  style={{
                    backgroundColor: "#00d4ff",
                  }}
                  type="button"
                  disabled={isSubmitting}
                  onClick={
                    email !== '' && password !== '' ? handleLogin : handleSubmit
                  }
                >
                  Login
                </Button>
                <Row className="mt-2">
                  <Col>
                    <Link
                      to={"/forgot"}
                      className="d-flex flex-row justify-content-center  fs-10"
                      style={{ cursor: "pointer" }}
                    >
                      Forgot password?
                    </Link>
                  </Col>
                </Row>

                <Row className="m-3">
                  <p style={{ textAlign: "center" }}>
                    Don't have an account yet?
                    <Link
                      className="m-1"
                      style={{ textDecoration: "none" }}
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </p>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
