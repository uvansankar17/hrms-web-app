import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Col, Form, Row } from "react-bootstrap";
import { PromotionShema } from "./Validations/PromotionValidate";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PromotionEditForm = () => {
  const navigate = useNavigate();
  const [promotionFor, setPromotionFor] = useState("");
  const [promotionDate, setPromotionDate] = useState("");
  const [promotionFrom, setPromotionFrom] = useState("");
  const [promotionTo, setPromotionTo] = useState("");
  const [promotionData, setpromotionData] = useState({});
  const initialValues = {
    promotionFor: "",
    promotionFrom: "",
    promotionTo: "",
    promotionDate: "", // You can set it to a default date if needed
  };
  const handleCancel = () => {
    navigate("/promotion");
  };
  function handleAddData() {
    // Handle form submission here
    console.log(promotionData);
    navigate("/promotion");
  }
  useEffect(() => {
    const promotionDetails = {
      promotionFor: promotionFor,
      promotionFrom: promotionFrom,
      promotionTo: promotionTo,
      promotionDate: promotionDate,
    };
    setpromotionData(promotionDetails);
  }, [promotionFor, promotionFrom, promotionTo, promotionDate]);

  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={PromotionShema}
          onSubmit={handleAddData}
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
              <Row className="d-flex flex-row justify-content-between align-items-center">
                <Col className="d-flex justify-content-start align-items-center">
                  <AiOutlineArrowLeft
                    onClick={handleCancel}
                    size={25}
                    className="m-1 pointer"
                  />
                  <h4>Edit Promotion</h4>
                </Col>
                <Col className="d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center">
                  <Button
                    className="m-1"
                    variant="secondary"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="m-1"
                    type="button"
                    disabled={isSubmitting}
                    onClick={
                      promotionFor !== "" &&
                      promotionFrom !== "" &&
                      promotionTo !== "" &&
                      promotionDate !== ""
                        ? handleAddData
                        : handleSubmit
                    }
                  >
                    Update
                  </Button>
                </Col>
              </Row>
              <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column">
                <Col className="m-1 p-4 d-flex w-100 h-100 flex-wrap flex-column shadow rounded">
                  <Col>
                    <h6 className="fw-bold">Promotion Information</h6>
                  </Col>
                  <Col className="m-2">
                    <Form.Group className="">
                      <Form.Label>Promotion For*</Form.Label>
                      <Form.Control
                        name="promotionFor"
                        className={`form-control ${
                          touched.promotionFor && errors.promotionFor
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setPromotionFor(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.promotionFor && errors.promotionFor ? (
                        <p className="text-danger">{errors.promotionFor}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Promotion Date*</Form.Label>
                      <Form.Control
                        name="promotionDate"
                        type="date"
                        className={`form-control ${
                          touched.promotionDate && errors.promotionDate
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setPromotionDate(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.promotionDate && errors.promotionDate ? (
                        <p className="text-danger">{errors.promotionDate}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                </Col>

                <Col className="m-1 p-4 d-flex w-100 h-100 flex-wrap flex-column shadow rounded">
                  <Col>
                    <h6 className="fw-bold">Promotion Details</h6>
                  </Col>
                  <Col className="m-2">
                    <Form.Group className="">
                      <Form.Label>Promotion From*</Form.Label>
                      <Form.Select
                        name="promotionFrom"
                        className={`form-control ${
                          touched.promotionFrom && errors.promotionFrom
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setPromotionFrom(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option value={"Web Developer"}>Web Developer</option>
                        <option value={"FrontEnd Developer"}>
                          FrontEnd Developer
                        </option>
                      </Form.Select>
                      {touched.promotionFrom && errors.promotionFrom ? (
                        <p className="text-danger">{errors.promotionFrom}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group className="">
                      <Form.Label>Promotion To*</Form.Label>
                      <Form.Select
                        name="promotionTo"
                        className={`form-control ${
                          touched.promotionTo && errors.promotionTo
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setPromotionTo(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option value={"Web Developer"}>Web Developer</option>
                        <option value={"FrontEnd Developer"}>
                          FrontEnd Developer
                        </option>
                      </Form.Select>
                      {touched.promotionTo && errors.promotionTo ? (
                        <p className="text-danger">{errors.promotionTo}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                </Col>
              </Row>
              <Row className="d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center">
                <Col className="d-flex justify-content-start align-items-center">
                  <Button
                    className="m-1"
                    variant="secondary"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <Button
                    className="m-1"
                    type="button"
                    disabled={isSubmitting}
                    onClick={
                      promotionFor !== "" &&
                      promotionFrom !== "" &&
                      promotionTo !== "" &&
                      promotionDate !== ""
                        ? handleAddData
                        : handleSubmit
                    }
                  >
                    Update
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default PromotionEditForm;
