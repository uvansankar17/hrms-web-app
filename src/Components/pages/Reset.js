import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainLogo from "../Images/logo.jpeg";
import { useNavigate } from "react-router-dom";
import { TfiLock } from "react-icons/tfi";
import { Formik } from "formik";
import { LogAndRegSchema } from "./Forms/Validations/LoginValidation";

const Reset = () => {
  const [otp, setOpt] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const history = useNavigate();
  const handleReset = () => {
    console.log("Email : " + otp);
    console.log("Password : " + password);
    console.log("Confirm Password : " + repeatPassword);
    history("/login");
    setOpt("");
    setPassword("");
    setRepeatPassword("");
  };
  const initialValues = {
    otp: "",
    password: "",
    confirmPassword: "",
  };

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
                    <Form.Label htmlFor="code">Code*</Form.Label>
                    <Form.Control
                      type="number"
                      size="md"
                      placeholder="Enter 4 digit code"
                      id="code"
                      name="otp"
                      className={`form-control ${
                        touched.otp && errors.otp ? "is-invalid" : ""
                      }`}
                      onChange={(e) => {
                        setOpt(e.target.value);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    ></Form.Control>
                    {touched.otp && errors.otp ? (
                      <p className="text-danger m-1">{errors.otp}</p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="password">Password*</Form.Label>
                    <Form.Control
                      type="password"
                      size="md"
                      placeholder="Enter new password"
                      id="password"
                      name="password"
                      className={`form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                      onChange={(e) => {
                        setPassword(e.target.value);
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
                    <Form.Label htmlFor="confirmPassword">
                      Confirm Password*
                    </Form.Label>
                    <Form.Control
                      type="password"
                      size="md"
                      placeholder="Enter Confirm password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`form-control ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "is-invalid"
                          : ""
                      }`}
                      onChange={(e) => {
                        setRepeatPassword(e.target.value);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    ></Form.Control>
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <p className="text-danger m-1">
                        {errors.confirmPassword}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  <Button
                    className="mt-3 text-dark btn btn-outline-dark outline-none border-none textDecoration-none"
                    style={{
                      backgroundColor: "#00d4ff",
                    }}
                    type="submit"
                    disabled={isSubmitting}
                    onClick={
                      otp !== "" && password !== "" && repeatPassword !== ""
                        ? handleReset
                        : handleSubmit
                    }
                  >
                    Reset Password
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reset;
