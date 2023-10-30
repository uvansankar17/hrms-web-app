import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { projectShema } from "./Validations/TimeFormValidate";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const TimeSheetAddForm = () => {
  const [projectName, setProjectName] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [remainingHours, setRemainingHours] = useState("");
  const [hours, setHours] = useState("");
  const [timeSheetData, setTimeSheetData] = useState({});
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/timesheet");
  };
  const initialValues = {
    projectName: "",
    deadLine: "",
    date: "",
    description: "",
    totalHours: "",
    remainingHours: "",
    hours: "",
  };
  function handleAddData() {
    // Handle form submission here
    console.log(timeSheetData);
    navigate("/timesheet");
  }
  useEffect(() => {
    const timeSheetDetails = {
      projectName: projectName,
      deadLine: deadLine,
      date: date,
      description: description,
      totalHours: totalHours,
      remainingHours: remainingHours,
      hours: hours,
    };
    setTimeSheetData(timeSheetDetails); // You need to set the state here
  }, [
    projectName,
    deadLine,
    date,
    description,
    totalHours,
    remainingHours,
    hours,
  ]);

  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={projectShema}
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
                  <h4>Add Today Work Details</h4>
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
                      projectName !== "" &&
                      deadLine !== "" &&
                      date !== "" &&
                      description !== "" &&
                      totalHours !== "" &&
                      remainingHours !== "" &&
                      hours !== ""
                        ? handleAddData
                        : handleSubmit
                    }
                  >
                    Save
                  </Button>
                </Col>
              </Row>
              <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column">
                <Col className="m-1 p-4 d-flex w-100 h-100 flex-wrap flex-column shadow rounded">
                  <Col>
                    <h6 className="fw-bold">Project Information</h6>
                  </Col>
                  <Col className="m-2">
                    <Form.Group className="">
                      <Form.Label>ProjectName*</Form.Label>
                      <Form.Control
                        name="projectName"
                        className={`form-control ${
                          touched.projectName && errors.projectName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setProjectName(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.projectName && errors.projectName ? (
                        <p className="text-danger">{errors.projectName}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Deadline*</Form.Label>
                      <Form.Control
                        name="deadLine"
                        type="date"
                        className={`form-control ${
                          touched.deadLine && errors.deadLine
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setDeadLine(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.deadLine && errors.deadLine ? (
                        <p className="text-danger">{errors.deadLine}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Date*</Form.Label>
                      <Form.Control
                        name="date"
                        type="date"
                        className={`form-control ${
                          touched.date && errors.date ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setDate(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.date && errors.date ? (
                        <p className="text-danger">{errors.date}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                </Col>

                <Col className="m-1 p-4 d-flex w-100 h-100 flex-wrap flex-column shadow rounded">
                  <Col>
                    <h6 className="fw-bold">Project Progress Details</h6>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Total Hours*</Form.Label>
                      <Form.Control
                        name="totalHours"
                        type="time"
                        className={`form-control ${
                          touched.totalHours && errors.totalHours
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTotalHours(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.totalHours && errors.totalHours ? (
                        <p className="text-danger">{errors.totalHours}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Remaining Hours*</Form.Label>
                      <Form.Control
                        name="remainingHours"
                        type="time"
                        className={`form-control ${
                          touched.remainingHours && errors.remainingHours
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setRemainingHours(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.remainingHours && errors.remainingHours ? (
                        <p className="text-danger">{errors.remainingHours}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>

                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Hours*</Form.Label>
                      <Form.Control
                        name="hours"
                        type="time"
                        className={`form-control ${
                          touched.hours && errors.hours ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setHours(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.hours && errors.hours ? (
                        <p className="text-danger">{errors.hours}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>

                  <Col className="m-2">
                    <Form.Group className="mt-2">
                      <Form.Label>Description</Form.Label>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="type here....."
                      >
                        <Form.Control
                          as="textarea"
                          name="description"
                          placeholder="Leave a comment here"
                          style={{ height: "100px" }}
                          className={`form-control ${
                            touched.description && errors.description
                              ? "is-invalid"
                              : ""
                          }`}
                          onChange={(e) => {
                            setDescription(e.target.value.trim());
                            handleChange(e);
                          }}
                          onBlur={handleBlur}
                        />
                      </FloatingLabel>
                      {touched.description && errors.description ? (
                        <p className="text-danger">{errors.description}</p>
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
                      projectName !== "" &&
                      deadLine !== "" &&
                      date !== "" &&
                      description !== "" &&
                      totalHours !== "" &&
                      remainingHours !== "" &&
                      hours !== ""
                        ? handleAddData
                        : handleSubmit
                    }
                  >
                    Save
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

export default TimeSheetAddForm;
