import { Formik } from 'formik';
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {EmployeeShema} from './Validations/EmployeeFormValidate';

const EmployeeAddForm = () => {
    const navigate = useNavigate();
    const handleCancel = () =>{
      navigate(-1)
    }
    const initialValues = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      employeeId: '',
      joiningDate: '',
      mobile: '',
      company:'',
      department:'',
      designation:'',
    };
    function handleSubmit(){
      // Handle form submission here
      console.log('jnhj');
      
    };
    return (
      <div>
        <Container fluid>
      <Formik
      initialValues={initialValues}
      validationSchema={EmployeeShema}
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
              <Col className='d-flex justify-content-start'><h4>Add Employee Details</h4></Col>
              <Col className='d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center'>
              <Button className='m-1' variant='secondary' onClick={handleCancel}>Cancel</Button>
              <Button className='m-1' type='submit' disabled={isSubmitting} onClick={handleSubmit}>Save</Button>
              </Col>
          </Row>
          <Row className='d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column '>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group className='' >
              
              <Form.Label>First Name</Form.Label>
              <Form.Control name='firstName' className={`form-control ${touched.firstName && errors.firstName ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.firstName && errors.firstName ?<p className='text-danger'>{errors.firstName}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group className='' >
              
              <Form.Label>Last Name</Form.Label>
              <Form.Control name='lastName' className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.lastName && errors.lastName ?<p className='text-danger'>{errors.lastName}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group className='' >
              
              <Form.Label>User Name</Form.Label>
              <Form.Control name='userName' className={`form-control ${touched.userName && errors.userName ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.userName && errors.userName ?<p className='text-danger'>{errors.userName}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group className='' >
              
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.email && errors.email ?<p className='text-danger'>{errors.email}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group className='' >
              
              <Form.Label>password</Form.Label>
              <Form.Control name='password' className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.password && errors.password ?<p className='text-danger'>{errors.password}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group className='' >
              
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control name='confirmPassword' className={`form-control ${touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.confirmPassword && errors.confirmPassword ?<p className='text-danger'>{errors.confirmPassword}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group className='' >
              
              <Form.Label>Employee ID</Form.Label>
              <Form.Control name='employeeId' className={`form-control ${touched.employeeId && errors.employeeId ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.employeeId && errors.employeeId ?<p className='text-danger'>{errors.employeeId}</p> : ""}
            </Form.Group>
            </Col>
            
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group>
              <Form.Label>Joining Date</Form.Label>
              <Form.Control name='joiningDate' type='date' className={`form-control ${touched.joiningDate && errors.joiningDate ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.joiningDate && errors.joiningDate ?<p className='text-danger'>{errors.joiningDate}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group className='' >
              
              <Form.Label>Mobile No.*</Form.Label>
              <Form.Control name='mobile' type='number' className={`form-control ${touched.mobile && errors.mobile ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}></Form.Control>
              {touched.mobile && errors.mobile ?<p className='text-danger'>{errors.mobile}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Select name='company' className={`form-control ${touched.company && errors.company ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}>
                <option disabled selected>----select----</option>
                <option>ABC Technologies</option>
                <option>xyz Technologies</option>
                <option>pqr Technologies</option>
              </Form.Select>
              {touched.company && errors.company ?<p className='text-danger'>{errors.company}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group>
              <Form.Label>Department</Form.Label>
              <Form.Select name='department' className={`form-control ${touched.department && errors.department ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}>
                <option disabled selected>----select----</option>
                <option>Web Development</option>
                <option>IT Management</option>
                <option>Marketing</option>
              </Form.Select>
              {touched.department && errors.department ?<p className='text-danger'>{errors.department}</p> : ""}
            </Form.Group>
            </Col>
            <Col className='m-2' lg="5" xxl="5" xl="5" md="12" sm="12">
            <Form.Group>
              <Form.Label>Designation</Form.Label>
              <Form.Select name='designation' className={`form-control ${touched.designation && errors.designation ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}>
                <option disabled selected>----select----</option>
                <option>Web Developer</option>
                <option>Web Designer</option>
                <option>Android Developer</option>
              </Form.Select>
              {touched.designation && errors.designation ?<p className='text-danger'>{errors.designation}</p> : ""}
            </Form.Group>
            </Col>
            
            
          </Row>
          <Row className='d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center'>
          <Col className='d-flex justify-content-start align-items-center'>
              <Button className='m-1' variant='secondary' onClick={handleCancel}>Cancel</Button>
              
              </Col>
              <Col className='d-flex justify-content-end align-items-center'>
              
              <Button className='m-1' type='submit' disabled={isSubmitting} onClick={handleSubmit}>Save</Button>
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

export default EmployeeAddForm
