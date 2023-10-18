import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const LeaveReport = () => {
  return (
    <>
    <Container>
      <Row className='d- flex flex-row mt-2 mb-4 align-items-center'>
        <Col className='d-flex flex-column justify-content-start'>
        <h5>Leave Report</h5>
        <span className='text-secondary'>Report/Leave Report</span>
        </Col>
        <Col className='d-flex justify-content-end'>
        <Button variant='warning'>Pdf</Button>
        </Col>
      </Row>
      <Row>
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
          <Form.Control
            placeholder="Employee"
            className="m-2"
          ></Form.Control>
          
          <Form.Select placeholder="Select Department" className="m-2">
            <option disabled selected>
              Select Department
            </option>
            <option>FrontEnd Developer</option>
            <option>BackEnd Developer</option>
          </Form.Select>
          <Form.Control  placeholder='From' type='date' className="m-2">
            
          </Form.Control>
          <Form.Control  placeholder='To' type='date' className="m-2">
            
          </Form.Control>
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

export default LeaveReport
