import React, {useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import  PROMOTION_DATA  from './Table/PROMOTION_DATA.json'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import BasicTable from './Table/BasicTable'


const Promotion = () => {
  const navigate =useNavigate()
  const [deleteShow, setDeleteShow] = useState(false);
    const deleteHandleClose = () => {
        setDeleteShow(false);
      }
      const deleteHandleShow = () => {
        setDeleteShow(true);
      }
  const handleShow = () =>navigate("/promotionAddForm");

 

  const COLUMNS = [
    {
        Header:"#",
        accessor:"id"
    },
    {
        Header:"PROMOTED EMPLOYEE",
        accessor:"promoted_employee"
    },
    {
        Header:"DEPARTMENT",
        accessor:"department"
    },
    {
        Header:"PROMOTION FROM",
        accessor:"promotion_from"
    },
    {
        Header:"PROMOTION TO",
        accessor:"promotion_to"
    },
    {
        Header:"PROMOTION DATE",
        accessor:"promotion_date"
    },
    {
        Header:"ACTION",
        accessor:"action",
        Cell:()=>(
            <div className='d-flex align-items-center justify-content-center flex-row'>
            <Link to={"/promotionEditForm"} ><Button variant='warning' ><FaEdit/></Button></Link>
            <Button variant='danger' className='m-1' onClick={()=>deleteHandleShow()} ><MdDelete/></Button>
            </div>
        )
    }
    
    
]

  return (
  <>
    <Container fluid className="">
    <Row className="d-flex  flex-row  justify-content-between align-items-center mt-3 mb-3">
      <Col className="d-flex  flex-column flex-wrap-wrap align-content-center ">
        <h4>Promotion</h4>
        
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
          Add Promotion
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

    <Row className=''>
    <BasicTable COLUMNS={COLUMNS} MOCK_DATA={PROMOTION_DATA} />
    </Row>

  </Container>
  <Modal show={deleteShow} onHide={deleteHandleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Promotion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Confirm to Delete this Promotion..?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteHandleClose}>
            Yes
          </Button>
          <Button variant="secondary" onClick={deleteHandleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default Promotion
