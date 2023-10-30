import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { RiLockPasswordLine } from "react-icons/ri";
import MainLogo from "../Images/logo.jpeg";
import { useNavigate } from "react-router-dom";
import { LogAndRegSchema } from "./Forms/Validations/LoginValidation";
import { Formik } from "formik";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleOtpChange = () => {
    if (parseInt(otp) === 1234) {
      navigate("/reset");
    } else {
      alert("Otp not Match");
    }
  };
  const initialValues = {
    otp: "",
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
            <RiLockPasswordLine className="text-secondary" size={"50px"} />
            <h5>Enter Otp</h5>
            <p className="text-secondary text-wrap text-center">
              We have send a Four digit code on your Email
            </p>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Formik
              initialValues={initialValues}
              validationSchema={LogAndRegSchema}
              onSubmit={handleOtpChange}
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
                <Form>
                  <Col className="d-flex flex-column justify-content-center align-items-center">
                    <OtpInput
                      value={otp}
                      onChange={(value) => {
                        setOtp(value);
                        handleChange("otp")(value);
                      }}
                      numInputs={4}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => (
                        <Form.Control
                          {...props}
                          onBlur={handleBlur("otp")}
                          name="otp"
                          className={`form-control ${
                            touched.otp && errors.otp ? "is-invalid" : ""
                          } `}
                          
                        />
                      )}
                    />
                    {touched.otp && errors.otp ? (
                      <p className="text-danger m-1">{errors.otp}</p>
                    ) : (
                      ""
                    )}
                    <Button
                    className="mt-3 text-dark btn btn-outline-dark outline-none border-none textDecoration-none"
                    style={{
                      backgroundColor: "#00d4ff",
                    }}
                    type="button"
                    disabled={isSubmitting}
                    onClick={otp !== "" ? handleOtpChange : handleSubmit}
                  >
                    submit
                  </Button>
                  </Col>
                  
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Otp;
