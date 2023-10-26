import { Button, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaEdit} from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Modal } from 'react-bootstrap'
import Header from '../Header'
import DeleteModel from '../DeleteModel'

const Designation = () => {
    const [addShow, setAddShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

  const addHandleClose = () => {
    setAddShow(false);
  }
  const addHandleShow = () => {
    setAddShow(true);
  }
  const editHandleClose = () => {
    setEditShow(false);
  }
  const editHandleShow = () => {
    setEditShow(true);
  }
  const deleteHandleClose = () => {
    setDeleteShow(false);
  }
  const deleteHandleShow = () => {
    setDeleteShow(true);
  }
  return (
   <>
    <Container fluid className='overflowX-hidden'>
        <Row>
        <Header ONCLICK={addHandleShow} HEADING="Designation List" BUTTON_NAME="Designation"/>
        </Row>
       
           
           <Row className="d-flex  flex-sm-column flex-lg-row flex-xxl-row justify-content-lg-between justify-content-xxl-center justify-content-xl-center flex-xl-row align-items-lg-center align-items-xxl-center align-items-xl-center m-sm-3 m-lg-6 m-xxl-6 m-xl-6 md-2">
             <Col className='d-flex flex-row' lg="5" xxl="5" xl="5" md="12" sm="12" style={{
            margin: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}>
                <Col className='d-flex justify-content-start flex-column'>
                <h4 className='fs-sm-5'>Jeo Johnson</h4>
                <p className='text-secondary'>(Web Developer)</p>
                <p className='text-success fs-6 fw-bolder'>Active</p>
                </Col>
                <Col className='d-flex justify-content-end flex-row align-items-center'>
                <Button variant='success' className='m-1 fs-6' onClick={editHandleShow}><FaEdit/></Button>
                <Button variant='danger' className='m-1'  onClick={deleteHandleShow}><MdDelete/></Button>
                </Col>
            </Col>

            <Col className='d-flex flex-row' lg="5" xxl="5" xl="5" md="12" sm="12" style={{
            margin: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}>
                <Col className='d-flex justify-content-start flex-column'>
                <h4 className='fs-sm-5'>Jeo Johnson</h4>
                <p className='text-secondary'>(Web Developer)</p>
                <p className='text-danger fs-6 fw-bolder'>In Active</p>
                </Col>
                <Col className='d-flex justify-content-end flex-row align-items-center'>
                <Button variant='success' className='m-1 fs-6' onClick={editHandleShow}><FaEdit/></Button>
                <Button variant='danger' className='m-1' onClick={deleteHandleShow}><MdDelete/></Button>
                </Col>
            </Col>

            <Col className='d-flex flex-row' lg="5" xxl="5" xl="5" md="12" sm="12" style={{
            margin: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}>
                <Col className='d-flex justify-content-start flex-column'>
                <h4 className='fs-sm-5'>Jeo Johnson</h4>
                <p className='text-secondary'>(Web Developer)</p>
                <p className='text-danger fs-6 fw-bolder'>In Active</p>
                </Col>
                <Col className='d-flex justify-content-end flex-row align-items-center'>
                <Button variant='success' className='m-1 fs-6' onClick={editHandleShow}><FaEdit/></Button>
                <Button variant='danger' className='m-1' onClick={deleteHandleShow}><MdDelete/></Button>
                </Col>
            </Col>

            <Col className='d-flex flex-row' lg="5" xxl="5" xl="5" md="12" sm="12" style={{
            margin: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}>
                <Col className='d-flex justify-content-start flex-column'>
                <h4 className='fs-sm-5'>Jeo Johnson</h4>
                <p className='text-secondary'>(Web Developer)</p>
                <p className='text-danger fs-6 fw-bolder'>In Active</p>
                </Col>
                <Col className='d-flex justify-content-end flex-row align-items-center'>
                <Button variant='success' className='m-1 fs-6' onClick={editHandleShow}><FaEdit/></Button>
                <Button variant='danger' className='m-1' onClick={deleteHandleShow}><MdDelete/></Button>
                </Col>
            </Col>

            <Col className='d-flex flex-row' lg="5" xxl="5" xl="5" md="12" sm="12" style={{
            margin: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}>
                <Col className='d-flex justify-content-start flex-column'>
                <h4 className='fs-sm-5'>Jeo Johnson</h4>
                <p className='text-secondary'>(Web Developer)</p>
                <p className='text-success fs-6 fw-bolder'>Active</p>
                </Col>
                <Col className='d-flex justify-content-end flex-row align-items-center'>
                <Button variant='success' className='m-1 fs-6' onClick={editHandleShow}><FaEdit/></Button>
                <Button variant='danger' className='m-1'onClick={deleteHandleShow}><MdDelete/></Button>
                </Col>
            </Col>
            <Col className='d-flex flex-row' lg="5" xxl="5" xl="5" md="12" sm="12" style={{
            margin: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}>
                <Col className='d-flex justify-content-start flex-column'>
                <h4 className='fs-sm-5'>Jeo Johnson</h4>
                <p className='text-secondary'>(Web Developer)</p>
                <p className='text-success fs-6 fw-bolder' >Active</p>
                </Col>
                <Col className='d-flex justify-content-end flex-row align-items-center'>
                <Button variant='success' className='m-1 fs-6' onClick={editHandleShow}><FaEdit/></Button>
                <Button variant='danger' className='m-1' onClick={deleteHandleShow}><MdDelete/></Button>
                </Col>
            </Col>
            <Col className='d-flex flex-row' lg="5" xxl="5" xl="5" md="12" sm="12" style={{
            margin: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}>
                <Col className='d-flex justify-content-start flex-column'>
                <h4 className='fs-sm-5'>Jeo Johnson</h4>
                <p className='text-secondary'>(Web Developer)</p>
                <p className='text-success fs-6 fw-bolder'>Active</p>
                </Col>
                <Col className='d-flex justify-content-end flex-row align-items-center'>
                <Button variant='success' className='m-1 fs-6' onClick={editHandleShow}><FaEdit/></Button>
                <Button variant='danger' className='m-1'onClick={deleteHandleShow}><MdDelete/></Button>
                </Col>
            </Col>

            <Col className='d-flex flex-row' lg="5" xxl="5" xl="5" md="12" sm="12" style={{
            margin: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}>
                <Col className='d-flex justify-content-start flex-column'>
                <h4 className='fs-sm-5'>Jeo Johnson</h4>
                <p className='text-secondary'>(Web Developer)</p>
                <p className='text-danger fs-6 fw-bolder'>In Active</p>
                </Col>
                <Col className='d-flex justify-content-end flex-row align-items-center'>
                <Button variant='success' className='m-1 fs-6'  onClick={editHandleShow}><FaEdit/></Button>
                <Button variant='danger' className='m-1' onClick={deleteHandleShow}><MdDelete/></Button>
                </Col>
            </Col>

            
           </Row>
            
           
        
    </Container>

    {/* Models */}


    {/* AddModel */}

    <Modal show={addShow} onHide={addHandleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
               <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control></Form.Control>
               </Form.Group>
               <Form.Group>
                <Form.Label>Designation</Form.Label>
                <Form.Control></Form.Control>
               </Form.Group>
               <Form.Group>
                <Form.Label>Stutus</Form.Label>
                <Form.Select>
                    <option>Active</option>
                    <option>In Active</option>
                </Form.Select>
               </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addHandleClose}>
            Add
          </Button>
          <Button variant="secondary" onClick={addHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

{/* Update Model */}

<Modal show={editShow} onHide={editHandleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
               <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control></Form.Control>
               </Form.Group>
               <Form.Group>
                <Form.Label>Designation</Form.Label>
                <Form.Control></Form.Control>
               </Form.Group>
               <Form.Group>
                <Form.Label>Stutus</Form.Label>
                <Form.Select>
                    <option>Active</option>
                    <option>In Active</option>
                </Form.Select>
               </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={editHandleClose}>
            Update
          </Button>
          <Button variant="secondary" onClick={editHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Model */}

      <DeleteModel DELETESTATE={deleteShow} ONCLICK={deleteHandleClose} DESCRIPTION="Designation" DELETETITLE="Designation"/>

   </>
  )
}

export default Designation
