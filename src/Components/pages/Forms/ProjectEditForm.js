import { Formik } from 'formik';
import React, { useState } from 'react'
 
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { projectShema} from './Validations/ProjectFormValidate';

const ProjectEditForm = () => {
  const [projectName,setProjectName]=useState("")
  const initialValues = {
    projectName: '',
    client: '',
    startDate: '',
    endDate: '',
    rate: '',
    priority: '',
    teamLeader: '',
    teamMember: '',
    description: '',
    projectFile:null
  };
  function handleSubmit(){
    // Handle form submission here
    console.log('jnhj');
    console.log(projectName);
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
        <>
         
        
        <Form >
        <Row className='d-flex flex-row justify-content-between align-items-center'>
            <Col className='d-flex justify-content-start'><h4>Update Project Details</h4></Col>
            <Col className='d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center'>
            <Button className='m-1' variant='secondary'>Cancel</Button>
            <Button className='m-1' type='submit' disabled={isSubmitting} onClick={handleSubmit}>Update</Button>
            </Col>
        </Row>
        <Row className='d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column '>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group className='' >
            
            <Form.Label>Project Name</Form.Label>
            <Form.Control  className={`form-control ${touched.projectName && errors.projectName ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={setProjectName(values.projectName)}   name='projectName'></Form.Control>
            {touched.projectName && errors.projectName ?<p className='text-danger'>{errors.projectName}</p> : ""}
          </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group>
            <Form.Label>Client</Form.Label>
            <Form.Select name='client' className={`form-control ${touched.client && errors.client ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}>
              <option disabled selected>----select----</option>
              <option>ABC Technologies</option>
              <option>xyz Technologies</option>
              <option>pqr Technologies</option>
            </Form.Select>
            {touched.client && errors.client ?<p className='text-danger'>{errors.client}</p> : ""}
          </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control name='startDate' type='date' className={`form-control ${touched.startDate && errors.startDate ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
            {touched.startDate && errors.startDate ?<p className='text-danger'>{errors.startDate}</p> : ""}
          </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group>
            <Form.Label>End Date</Form.Label>
            <Form.Control name='endDate' type='date' className={`form-control ${touched.endDate && errors.endDate ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
            {touched.endDate && errors.endDate ?<p className='text-danger'>{errors.endDate}</p> : ""}
          </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group className='mt-2'>
            <Form.Label>Rate</Form.Label>
            <Form.Control name='rate'  className={`form-control ${touched.rate && errors.rate ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
            
            {touched.rate && errors.rate ?<p className='text-danger'>{errors.rate}</p> : ""}
          </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group className='mt-2'>
            <Form.Label>Priority</Form.Label>
            <Form.Select name='priority' className={`form-control ${touched.priority && errors.priority ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}>
              <option disabled>----select----</option>
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Low"}>Low</option>
            </Form.Select>
            {touched.priority && errors.priority ?<p className='text-danger'>{errors.priority}</p> : ""}

          </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group className='mt-2'>
            <Form.Label>Add Project Leader</Form.Label>
            <Form.Control name='teamLeader' className={`form-control ${touched.teamLeader && errors.teamLeader ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
            {touched.teamLeader && errors.teamLeader ?<p className='text-danger'>{errors.teamLeader}</p> : ""}
          </Form.Group>
          </Col>
          <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
          <Form.Group className='mt-2'>
            <Form.Label>Team Members</Form.Label>
            <Form.Control name='teamMember'className={`form-control ${touched.teamMember && errors.teamMember ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
            </Form.Group>
            {touched.teamMember && errors.teamMember ?<p className='text-danger'>{errors.teamMember}</p> : ""}
          </Col>
  
          
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group className='mt-2'>
            <Form.Label>Description</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="type here.....">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          name='description'
          className={`form-control ${touched.description && errors.description ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}
        />
          </FloatingLabel>
          {touched.description && errors.description ?<p className='text-danger'>{errors.description}</p> : ""}
          </Form.Group>

            </Col>
          
        <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
        <Form.Group className='mt-3'>
            <Form.Label>Upload File</Form.Label>
            <Form.Control name='projectFile' type='file' className={`form-control ${touched.projectFile && errors.projectFile ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
            {touched.projectFile && errors.projectFile ? <p className='text-danger'>{errors.projectFile}</p> : ""}
          </Form.Group>

        </Col>
          
        </Row>
        <Row className='d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center'>
        <Col className='d-flex justify-content-start align-items-center'>
            <Button className='m-1' variant='secondary'>Cancel</Button>
            
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
            
            <Button className='m-1' type='submit' disabled={isSubmitting} onClick={handleSubmit}>Update</Button>
            </Col>
        </Row>
         </Form>
        
        
        </>
       )}
        </Formik>
      </Container>
    </div>
  )
}

export default ProjectEditForm
