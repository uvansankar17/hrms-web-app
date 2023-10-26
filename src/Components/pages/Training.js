import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row,} from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import  TRAINING_DATA  from './Table/TRAINING_DATA.json'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import BasicTable from './Table/BasicTable'

const Training = () => {
  const navigate =useNavigate()
  const handleShow = () =>navigate("/trainingAddForm");
  const [deleteShow, setDeleteShow] = useState(false);
  const deleteHandleClose = () => {
      setDeleteShow(false);
    }
    const deleteHandleShow = () => {
      setDeleteShow(true);
    }

  const COLUMNS = [
    {
        Header:"#",
        accessor:"id"
    },
    {
        Header:"TRAINING TYPE",
        accessor:"training_type"
    },
    
    {
        Header:"EMPLOYEE",
        accessor:"employee"
    },
    {
      Header:"TRAINER",
      accessor:"trainer"
  },
    {
        Header:"TIME DURATION",
        accessor:"time_duration"
    },
    {
        Header:"DESCRIPTION",
        accessor:"description"
    },
    {
      Header:"COST",
      accessor:"cost"
  },
  {
    Header:"STATUS",
    accessor:"status"
  },
    {
        Header:"ACTION",
        accessor:"action",
        Cell:()=>(
            <div className='d-flex align-items-center justify-content-center flex-row'>
            <Link to={"/trainingEditForm"} ><Button variant='warning' ><FaEdit/></Button></Link>
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
        <h4>Training</h4>
        
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
          Add New
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
    <BasicTable COLUMNS={COLUMNS} MOCK_DATA={TRAINING_DATA} />
    </Row>
  </Container>
  <Modal show={deleteShow} onHide={deleteHandleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Training</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Confirm to Delete this Training..?
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

export default Training
