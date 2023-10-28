import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const EmployeeDashboard = () => {
  return (
    <Container fluid className="">
      <Row className="d-flex  flex-row  justify-content-between align-items-center">
        <Col className="d-flex  flex-column flex-wrap-wrap align-content-center ">
          <h5>Employee</h5>
          <p className="text-muted fw-bold" style={{ fontSize: "13px" }}>
            <span>Dashboard / </span>Employee
          </p>
        </Col>
        <Col className="d-flex  flex-row flex-wrap-wrap justify-content-end align-items-center">
          <Button
            variant="success"
            className="d-lg-none d-xxl-none d-flex d-sm-flex d-md-flex rounded"
            size="sm"
          >
            <FaPlus className="m-2" />
          </Button>
          <Button
            variant="success"
            className="d-lg-block d-xxl-block d-none d-sm-none rounded"
            size="sm"
          >
            <FaPlus className="m-2" />
            Add Employee
          </Button>
        </Col>
      </Row>
      <Row>
        <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
          <Form.Control
            placeholder="Employee Id"
            className="m-2"
          ></Form.Control>
          <Form.Control
            placeholder="Employee Name"
            className="m-2"
          ></Form.Control>
          <Form.Select placeholder="Employee Designation" className="m-2">
            <option disabled selected>
              Select Designation
            </option>
            <option>FrontEnd Developer</option>
            <option>BackEnd Developer</option>
          </Form.Select>
          <Button
            className="m-2 text-dark fw-bold"
            style={{
              backgroundColor: "#00d4ff",
              outline: "none",
              border: "none",
            }}
          >
            Search
          </Button>
        </Form>
      </Row>
      <Row></Row>
      <Row className="d-flex flex-lg-row flex-xl-row flex-xxl-row flex-md-column  flex-column  justify-content-evenly align-items-center mt-5">
        <Col
          className="d-flex  flex-row  justify-content-between align-items-start shadow"
          style={{
            margin: "10px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
        >
          <Col className="d-flex  flex-column flex-wrap-wrap justify-content-center align-items-center p-2">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                style={{ width: "70px", height: "70px" }}
                alt="Avatar"
              />
            </div>
            <h4 className="fs-6 fw-bold">John Doe</h4>
            <p className="fw-bold text-secondary" style={{ fontSize: "10px" }}>
              FrontEnd Developer
            </p>
          </Col>
          <Col className="d-flex  flex-row flex-wrap-wrap justify-content-end align-items-end p-2">
            <BsThreeDotsVertical />
          </Col>
        </Col>

        <Col
          className="d-flex  flex-row  justify-content-between align-items-start shadow"
          style={{
            margin: "10px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
        >
          <Col className="d-flex  flex-column flex-wrap-wrap justify-content-center align-items-center p-2">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                style={{ width: "70px", height: "70px" }}
                alt="Avatar"
              />
            </div>
            <h4 className="fs-6 fw-bold">John Doe</h4>
            <p className="fw-bold text-secondary" style={{ fontSize: "10px" }}>
              FrontEnd Developer
            </p>
          </Col>
          <Col className="d-flex  flex-row flex-wrap-wrap justify-content-end align-items-end p-2">
            <BsThreeDotsVertical />
          </Col>
        </Col>

        <Col
          className="d-flex  flex-row  justify-content-between align-items-start shadow"
          style={{
            margin: "10px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
        >
          <Col className="d-flex  flex-column flex-wrap-wrap justify-content-center align-items-center p-2">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                style={{ width: "70px", height: "70px" }}
                alt="Avatar"
              />
            </div>
            <h4 className="fs-6 fw-bold">John Doe</h4>
            <p className="fw-bold text-secondary" style={{ fontSize: "10px" }}>
              FrontEnd Developer
            </p>
          </Col>
          <Col className="d-flex  flex-row flex-wrap-wrap justify-content-end align-items-end p-2">
            <BsThreeDotsVertical />
          </Col>
        </Col>

        <Col
          className="d-flex  flex-row  justify-content-between align-items-start shadow"
          style={{
            margin: "10px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
        >
          <Col className="d-flex  flex-column flex-wrap-wrap justify-content-center align-items-center p-2">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                style={{ width: "70px", height: "70px" }}
                alt="Avatar"
              />
            </div>
            <h4 className="fs-6 fw-bold">John Doe</h4>
            <p className="fw-bold text-secondary" style={{ fontSize: "10px" }}>
              FrontEnd Developer
            </p>
          </Col>
          <Col className="d-flex  flex-row flex-wrap-wrap justify-content-end align-items-end p-2">
            <BsThreeDotsVertical />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeDashboard;
