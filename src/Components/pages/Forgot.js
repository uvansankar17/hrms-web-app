import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainLogo from "../Images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { TbAlertSquareRounded } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
const Forgot = () => {
  const Navigate = useNavigate();
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
          <TbAlertSquareRounded className="text-secondary" size={"50px"} />
          <h5>Forgot Password</h5>
          <p className="text-secondary text-wrap text-center">
            Enter your email and we'll send you a code to <br></br> reset your
            password
          </p>
        </Col>
        <Col>
          <Form className="d-flex flex-column justify-content-center">
            <Form.Group>
              <Form.Label htmlFor="email">Email*</Form.Label>
              <Form.Control type="email" size="md" id="email"></Form.Control>
            </Form.Group>

            <Button
              className="mt-3 text-dark btn btn-outline-dark"
              style={{
                backgroundColor: "#00d4ff",
                outline: "none",
                border: "none",
                textDecoration: "none",
              }}
              onClick={() => Navigate("/reset")}
            >
              Forgot Password
            </Button>

            <Link
              style={{ textDecoration: "none" }}
              className="text-center mt-3"
              to={"/"}
            >
              <IoIosArrowBack />
              Back to Login
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Forgot;
