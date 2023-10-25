import { Formik } from 'formik';
import React from 'react'
import { Container } from 'react-bootstrap'
import { Button, Col,FloatingLabel, Form, Row } from 'react-bootstrap'
import { projectShema } from './Validations/TimeFormValidate';
import { useNavigate } from 'react-router-dom';


const TimeSheetAddForm = () => {
  const navigate = useNavigate();
  const handleCancel = () =>{
    navigate(-1)
  }
  const initialValues = {
    projectName: "",
    deadLine:"",
    date: "",
    description: "",
    totalHours: "",
    remainingHours: "",
    hours: "",
  };
  function handleSubmit(){
    // Handle form submission here
    console.log('hi hrms');
    
  };
  return (
    <div>
      <Container fluid>
      <Formik
      initialValues={initialValues}
      validationSchema={projectShema}
      onSubmit={handleSubmit}
    >
      {({values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting })=>(
            <Form >
        <Row className='d-flex flex-row justify-content-between align-items-center'>
            <Col className='d-flex justify-content-start'>
            <h4>Add Today Work Details</h4>
            </Col>
            <Col className='d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center'>
            <Button className='m-1' variant='secondary'onClick={handleCancel}>Cancel</Button>
            <Button className='m-1' type='submit' disabled={isSubmitting} onClick={handleSubmit}>Save</Button>
            </Col>
        </Row>
          <Row className='d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column'>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group className='' >
          <Form.Label>Project*</Form.Label>
              <Form.Control name='projectName' className={`form-control ${touched.projectName && errors.projectName ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.projectName && errors.projectName ?<p className='text-danger'>{errors.projectName}</p> : ""}
            </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group>
              <Form.Label>Deadline*</Form.Label>
              <Form.Control name='deadLine' type='date' className={`form-control ${touched.deadLine && errors.deadLine ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.deadLine && errors.deadLine ?<p className='text-danger'>{errors.deadLine}</p> : ""}
            </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group>
              <Form.Label>Total Hours*</Form.Label>
              <Form.Control name='totalHours' type='time' className={`form-control ${touched.totalHours && errors.totalHours ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.totalHours && errors.totalHours ?<p className='text-danger'>{errors.totalHours}</p> : ""}
            </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group>
              <Form.Label >Remaining Hours*</Form.Label>
              <Form.Control name='remainingHours' type='time' className={`form-control ${touched.remainingHours && errors.remainingHours ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.remainingHours && errors.remainingHours ?<p className='text-danger'>{errors.remainingHours}</p> : ""}
            </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group>
              <Form.Label>Date*</Form.Label>
              <Form.Control name='date' type='date'className={`form-control ${touched.date && errors.date ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.date && errors.date ?<p className='text-danger'>{errors.date}</p> : ""}
            </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group>
              <Form.Label>Hours*</Form.Label>
              <Form.Control name='hours' type='time' className={`form-control ${touched.hours && errors.hours ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.hours && errors.hours ?<p className='text-danger'>{errors.hours}</p> : ""}
            </Form.Group>
          </Col>
         
  
          
            <Col className='m-2' lg="10" xxl="10" xl="10" md="10" sm="10">
            <Form.Group className='mt-2'>
            <Form.Label>Description</Form.Label>
            <FloatingLabel  controlId="floatingTextarea2" label="type here.....">
        <Form.Control
          as="textarea"
          name='description'
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          className={`form-control ${touched.description && errors.description ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}
        />
          </FloatingLabel>
          {touched.description && errors.description ?<p className='text-danger'>{errors.description}</p> : ""}
          </Form.Group>

            </Col>
            </Row>
            <Row className='d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center'>
        <Col className='d-flex justify-content-start align-items-center'>
            <Button className='m-1' variant='secondary'onClick={handleCancel}>Cancel</Button>
            
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
            
            <Button className='m-1' type='submit' disabled={isSubmitting} onClick={handleSubmit}>Save</Button>
            </Col>
        </Row>
         </Form>
          )}
    </Formik>
        
        
       
        
      </Container>
    </div>
  )
}

export default TimeSheetAddForm
