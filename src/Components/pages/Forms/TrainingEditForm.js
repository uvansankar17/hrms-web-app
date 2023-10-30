import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { TrainingShema } from "./Validations/TrainingFormValidate";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const TrainingEditForm = () => {
  const [trainingType, setTrainingType] = useState("");
  const [trainer, setTrainer] = useState("");
  const [employee, setEmployee] = useState("");
  const [description, setDescription] = useState("");
  const [trainingCost, setTrainingCost] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [trainingData, setTrainingData] = useState({});
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/training");
  };
  const initialValues = {
    trainingType: "",
    trainer: "",
    employee: "",
    description: "",
    trainingCost: "",
    startDate: "",
    endDate: "",
    status: "",
  };
  function handleAddData() {
    console.log(trainingData);
    navigate("/training");
  }

  useEffect(() => {
    const trainingDetails = {
      trainingType: trainingType,
      trainer: trainer,
      employee: employee,
      description: description,
      trainingCost: trainingCost,
      startDate: startDate,
      endDate: endDate,
      status: status,
    };
    setTrainingData(trainingDetails);
  }, [
    trainingType,
    trainer,
    employee,
    description,
    trainingCost,
    startDate,
    endDate,
    status,
  ]);

  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={TrainingShema}
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
                  <h4>Edit Training</h4>
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
                      trainingType !== "" &&
                      trainer !== "" &&
                      employee !== "" &&
                      description !== "" &&
                      trainingCost !== "" &&
                      startDate !== "" &&
                      endDate !== "" &&
                      status !== ""
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
                    <h6 className="fw-bold">Training Program Details</h6>
                  </Col>
                  <Col className="m-2">
                    <Form.Group className="">
                      <Form.Label>Training Type*</Form.Label>
                      <Form.Select
                        name="trainingType"
                        className={`form-control ${
                          touched.trainingType && errors.trainingType
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTrainingType(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option value={"Node Training"}>Node Training</option>
                        <option value={"React Training"}>React Training</option>
                      </Form.Select>
                      {touched.trainingType && errors.trainingType ? (
                        <p className="text-danger">{errors.trainingType}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Training Cost*</Form.Label>
                      <Form.Control
                        name="trainingCost"
                        type="number"
                        className={`form-control ${
                          touched.trainingCost && errors.trainingCost
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTrainingCost(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.trainingCost && errors.trainingCost ? (
                        <p className="text-danger">{errors.trainingCost}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Start Date*</Form.Label>
                      <Form.Control
                        name="startDate"
                        type="date"
                        className={`form-control ${
                          touched.startDate && errors.startDate
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setStartDate(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.startDate && errors.startDate ? (
                        <p className="text-danger">{errors.startDate}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>End Date*</Form.Label>
                      <Form.Control
                        name="endDate"
                        type="date"
                        className={`form-control ${
                          touched.endDate && errors.endDate ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setEndDate(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.endDate && errors.endDate ? (
                        <p className="text-danger">{errors.endDate}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                </Col>

                <Col className="m-1 p-4 d-flex w-100 h-100 flex-wrap flex-column shadow rounded">
                  <Col>
                    <h6 className="fw-bold">Training Information</h6>
                  </Col>
                  <Col className="m-2">
                    <Form.Group className="">
                      <Form.Label>Trainer*</Form.Label>
                      <Form.Select
                        name="trainer"
                        className={`form-control ${
                          touched.trainer && errors.trainer ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setTrainer(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option value={"John Doe"}>John Doe</option>
                        <option value={"John Doe"}>John Doe</option>
                      </Form.Select>
                      {touched.trainer && errors.trainer ? (
                        <p className="text-danger">{errors.trainer}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group className="">
                      <Form.Label>Employees*</Form.Label>
                      <Form.Select
                        name="employee"
                        className={`form-control ${
                          touched.employee && errors.employee
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setEmployee(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option value={"John Doe"}>John Doe</option>
                        <option value={"John Doe"}>John Doe</option>
                      </Form.Select>
                      {touched.employee && errors.employee ? (
                        <p className="text-danger">{errors.employee}</p>
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
                          name="description"
                          as="textarea"
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
                  <Col className="m-2">
                    <Form.Group className="">
                      <Form.Label>Status*</Form.Label>
                      <Form.Select
                        name="status"
                        className={`form-control ${
                          touched.status && errors.status ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setStatus(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option value={"John Doe"}>Active</option>
                        <option value={"John Doe"}>In Active</option>
                      </Form.Select>
                      {touched.status && errors.status ? (
                        <p className="text-danger">{errors.status}</p>
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
                      trainingType !== "" &&
                      trainer !== "" &&
                      employee !== "" &&
                      description !== "" &&
                      trainingCost !== "" &&
                      startDate !== "" &&
                      endDate !== "" &&
                      status !== ""
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

export default TrainingEditForm;
