import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainLogo from "../Images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { TfiLock } from "react-icons/tfi";

const Reset = () => {
  const Navigate = useNavigate();
  return (
    <>
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
            <TfiLock className="text-secondary" size={"50px"} />
            <h5>Reset Password</h5>
            <p className="text-secondary text-wrap text-center">
              We have send a Four digit code on your Email
            </p>
          </Col>
          <Col>
            <Form className="d-flex flex-column justify-content-center">
              <Form.Group>
                <Form.Label htmlFor="code">Code*</Form.Label>
                <Form.Control
                  type="number"
                  size="md"
                  placeholder="Enter 4 digit code"
                  id="code"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password*</Form.Label>
                <Form.Control
                  type="password"
                  size="md"
                  placeholder="Enter new password"
                  id="password"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="RepeatPassword">
                  Repeat Password*
                </Form.Label>
                <Form.Control
                  type="password"
                  size="md"
                  placeholder="Enter Repeat password"
                  id="RepeatPassword"
                ></Form.Control>
              </Form.Group>

              <Button
                className="mt-3 text-dark btn btn-outline-dark"
                style={{
                  backgroundColor: "#00d4ff",
                  outline: "none",
                  border: "none",
                  textDecoration: "none",
                }}
                onClick={() => Navigate("/")}
              >
                Reset Password
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reset;
