import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const AttendanceReport = () => {
  return (
    <>
        <Container>
      <Row className='d- flex flex-row mt-2 mb-4'>
        <Col className='d-flex justify-content-start'>
        <h5>Attendance Report</h5>
        </Col>
      </Row>
      <Row>
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
          <Form.Control
            placeholder="Employee Name"
            className="m-2"
          ></Form.Control>
          
          <Form.Control  placeholder='From' type='month' className="m-2">
            
          </Form.Control>
          <Form.Control  placeholder='To'  type='month'  className="m-2">
            
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

export default AttendanceReport
