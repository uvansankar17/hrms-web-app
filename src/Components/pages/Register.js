import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainLogo from "../Images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { LogAndRegSchema } from "./Forms/Validations/LoginValidation";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useNavigate();
  const handleRegister = () => {
    console.log("Email : " + email);
    console.log("Password : " + password);
    console.log("Confirm Password : " + confirmPassword);
    history("/login");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
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
          <h5>Register</h5>
          <p className="text-secondary">Access to our dashboard</p>
        </Col>
        <Col>
          <Formik
            initialValues={initialValues}
            validationSchema={LogAndRegSchema}
            onSubmit={handleRegister}
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
                <Form.Group>
                  <Form.Label htmlFor="email">Email*</Form.Label>
                  <Form.Control
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
                  ></Form.Control>
                  {touched.email && errors.email ? (
                    <p className="text-danger m-1">{errors.email}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="password">Password*</Form.Label>
                  <Form.Control
                    type="password"
                    size="md"
                    id="password"
                    name="password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                    onChange={(e) => {
                      setPassword(e.target.value.trim());
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  ></Form.Control>
                  {touched.password && errors.password ? (
                    <p className="text-danger m-1">{errors.password}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="RepeatPassword">
                    Repeat Password*
                  </Form.Label>
                  <Form.Control
                    type="password"
                    size="md"
                    id="RepeatPassword"
                    name="confirmPassword"
                    className={`form-control ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value.trim());
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  ></Form.Control>
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <p className="text-danger m-1">{errors.confirmPassword}</p>
                  ) : (
                    ""
                  )}
                </Form.Group>

                <Button
                  className="mt-3 text-dark btn btn-outline-dark border-none outline-none"
                  style={{
                    backgroundColor: "#00d4ff",
                  }}
                  type="button"
                  disabled={isSubmitting}
                  onClick={
                    (touched.email && errors.email) || (touched.password && errors.password) || (touched.confirmPassword && errors.confirmPassword) ? handleSubmit :  handleRegister
                  }
                >
                  Register
                </Button>
                <Row className="m-4">
                  <p className="text-center">
                    Already have an account?
                    <Link
                      className="m-1 textDecoration-none"
                      to={"/"}
                    >
                      Login
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

export default Register;
