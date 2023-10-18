import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainLogo from "../Images/logo.jpeg";
import { Link } from "react-router-dom";

const Register = () => {
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
          <Form className="d-flex flex-column justify-content-center">
            <Form.Group>
              <Form.Label htmlFor="email">Email*</Form.Label>
              <Form.Control size="md" id="email " type="email"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password*</Form.Label>
              <Form.Control
                type="password"
                size="md"
                id="password"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="RepeatPassword">Repeat Password*</Form.Label>
              <Form.Control
                type="password"
                size="md"
                id="RepeatPassword"
              ></Form.Control>
            </Form.Group>
            <Button
              className="mt-3 text-dark btn btn-outline-dark"
              style={{
                backgroundColor: "#00d4ff",
                outline: "none",
                border: "none",
              }}
            >
              Register
            </Button>
            <Row className="m-4">
              <p>
                Already have an account?
                <Link style={{ textDecoration: "none" }} to={"/"}>
                  Login
                </Link>
              </p>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
