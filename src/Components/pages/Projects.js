import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
 const navigate =useNavigate()
  const handleShow = () =>navigate("/projectAddForm");
  return (
  <>
    <Container fluid className="">
    <Row className="d-flex  flex-row  justify-content-between align-items-center mt-3 mb-3">
      <Col className="d-flex  flex-column flex-wrap-wrap align-content-center ">
        <h5>Projects</h5>
        
      </Col>
      <Col className="d-flex  flex-row flex-wrap-wrap justify-content-end align-items-center">
        <div
          className="d-lg-block d-none d-xl-block d-sm-none align-items-center shadow m-2 p-1 fs-4 rounded"
          style={{ cursor: "pointer" }}
        >
         
        </div>
       
        <Button
          variant="success"
          className="d-lg-block d-xxl-block d-none d-sm-none rounded text-bold"
          size="sm"
          onClick={handleShow}
        >
          <FaPlus className="m-2" />
          Add project
        </Button>
        <Button
          variant="success"
          className="d-lg-none d-xxl-none d-sm-flex"
          size="sm"
          onClick={handleShow}
        >
          <FaPlus className="m-2" />
         
        </Button>
      </Col>
    </Row>
    <Row>
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
        <Form.Control
          placeholder="Project Name"
          className="m-2"
        ></Form.Control>
        <Form.Control
          placeholder="Employee Name"
          className="m-2"
        ></Form.Control>
        <Form.Select placeholder="Designation" className="m-2">
          <option disabled selected>
            Select Role
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
  
  </Container>
 
  </>
  
  )
}

export default Projects
