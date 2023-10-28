import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainLogo from "../Images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { TbAlertSquareRounded } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { Formik } from "formik";
import { LogAndRegSchema } from "./Forms/Validations/LoginValidation";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const history = useNavigate();
  const handleForgot = () => {
    console.log("Email : " + email);

    history("/reset");
    setEmail("");
  };
  const initialValues = {
    email: "",
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
          <TbAlertSquareRounded className="text-secondary" size={"50px"} />
          <h5>Forgot Password</h5>
          <p className="text-secondary text-wrap text-center">
            Enter your email and we'll send you a code to <br></br> reset your
            password
          </p>
        </Col>
        <Col>
          <Formik
            initialValues={initialValues}
            validationSchema={LogAndRegSchema}
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
                      setEmail(e.target.value);
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

                <Button
                  className="mt-3 text-dark btn btn-outline-dark mainColor border-none outline-none"
                  style={{
                    backgroundColor: "#00d4ff",
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  onClick={email !== "" ? handleForgot : handleSubmit}
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
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Forgot;
