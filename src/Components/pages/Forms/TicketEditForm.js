import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { ticketSchema } from "./Validations/TicketFormValidation";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const TicketEditForm = () => {
  const [project, setProject] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [ticketFollower, setTicketFollower] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [client, setClient] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [description, setDescription] = useState("");
  const [ticketData, setTicketData] = useState({});
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/ticket");
  };
  const initialValues = {
    project: "",
    ticketId: "",
    assignTo: "",
    ticketFollower: "",
    priority: "",
    status: "",
    client: "",
    createDate: "",
    attachment: null,
    description: "",
  };
  function handleAddData() {
    // Handle form submission here
    console.log(ticketData);
    navigate("/ticket");
  }
  useEffect(() => {
    const ticketDetails = {
      project: project,
      ticketId: ticketId,
      assignTo: assignTo,
      ticketFollower: ticketFollower,
      priority: priority,
      status: status,
      client: client,
      createDate: createDate,
      attachment: attachment,
      description: description,
    };
    setTicketData(ticketDetails);
  }, [
    project,
    ticketId,
    assignTo,
    ticketFollower,
    priority,
    status,
    client,
    createDate,
    attachment,
    description,
  ]);

  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={ticketSchema}
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
                  <h4>Edit Ticket</h4>
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
                      project !== "" &&
                      ticketId !== "" &&
                      assignTo !== "" &&
                      ticketFollower !== "" &&
                      priority !== "" &&
                      status !== "" &&
                      client !== "" &&
                      createDate !== "" &&
                      attachment !== "" &&
                      description !== ""
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
                    <h6 className="fw-bold">Ticket Information</h6>
                  </Col>
                  <Col className="m-2">
                    <Form.Group className="">
                      <Form.Label>Ticket ID*</Form.Label>
                      <Form.Control
                        name="ticketId"
                        className={`form-control ${
                          touched.ticketId && errors.ticketId
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTicketId(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.ticketId && errors.ticketId ? (
                        <p className="text-danger">{errors.ticketId}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Asign To*</Form.Label>
                      <Form.Select
                        name="assignTo"
                        className={`form-control ${
                          touched.assignTo && errors.assignTo
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setAssignTo(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option>John Joe</option>
                        <option>John Joe</option>
                        <option>John Joe</option>
                        <option>John Joe</option>
                      </Form.Select>
                      {touched.assignTo && errors.assignTo ? (
                        <p className="text-danger">{errors.assignTo}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Ticket Followers*</Form.Label>
                      <Form.Select
                        name="ticketFollower"
                        className={`form-control ${
                          touched.ticketFollower && errors.ticketFollower
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTicketFollower(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option>John Joe</option>
                        <option>John Joe</option>
                        <option>John Joe</option>
                        <option>John Joe</option>
                      </Form.Select>
                      {touched.ticketFollower && errors.ticketFollower ? (
                        <p className="text-danger">{errors.ticketFollower}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Priority*</Form.Label>
                      <Form.Select
                        name="priority"
                        className={`form-control ${
                          touched.priority && errors.priority
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setPriority(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </Form.Select>
                      {touched.priority && errors.priority ? (
                        <p className="text-danger">{errors.priority}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Create Date*</Form.Label>
                      <Form.Control
                        name="createDate"
                        type="date"
                        className={`form-control ${
                          touched.createDate && errors.createDate
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setCreateDate(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.createDate && errors.createDate ? (
                        <p className="text-danger">{errors.createDate}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                </Col>

                <Col className="m-1 p-4 d-flex w-100 h-100 flex-wrap flex-column shadow rounded">
                  <Col>
                    <h6 className="fw-bold">Project Information</h6>
                  </Col>
                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Project*</Form.Label>
                      <Form.Select
                        name="project"
                        className={`form-control ${
                          touched.project && errors.project ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setProject(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option>HRMS</option>
                        <option>Quiz App</option>
                        <option>Video call App</option>
                      </Form.Select>
                      {touched.project && errors.project ? (
                        <p className="text-danger">{errors.project}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>

                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Client*</Form.Label>
                      <Form.Select
                        name="client"
                        className={`form-control ${
                          touched.client && errors.client ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setClient(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option>ABC Technologies</option>
                        <option>xyz Technologies</option>
                        <option>pqr Technologies</option>
                      </Form.Select>
                      {touched.client && errors.client ? (
                        <p className="text-danger">{errors.client}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>

                  <Col className="m-2">
                    <Form.Group>
                      <Form.Label>Status*</Form.Label>
                      <Form.Select
                        name="status"
                        className={`form-control ${
                          touched.status && errors.status ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setStatus(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option disabled selected>
                          ----select----
                        </option>
                        <option>Open</option>
                        <option>ReOpened</option>
                        <option>On Hold</option>
                        <option>Closed</option>
                        <option>In Progress</option>
                        <option>Cancelled</option>
                      </Form.Select>
                      {touched.status && errors.status ? (
                        <p className="text-danger">{errors.status}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>

                  <Col className="m-2">
                    <Form.Group className="mt-3">
                      <Form.Label>Attachment*</Form.Label>
                      <Form.Control
                        name="attachment"
                        type="file"
                        className={`form-control ${
                          touched.attachment && errors.attachment
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setAttachment(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></Form.Control>
                      {touched.attachment && errors.attachment ? (
                        <p className="text-danger">{errors.attachment}</p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="m-2">
                    <Form.Group className="mt-2">
                      <Form.Label>Description*</Form.Label>
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
                            setDescription(e.target.value);
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
                      project !== "" &&
                      ticketId !== "" &&
                      assignTo !== "" &&
                      ticketFollower !== "" &&
                      priority !== "" &&
                      status !== "" &&
                      client !== "" &&
                      createDate !== "" &&
                      attachment !== "" &&
                      description !== ""
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

export default TicketEditForm;
