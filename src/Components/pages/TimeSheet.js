import React, {useState } from 'react'
import { Button, Col, Container,  Modal, Row,} from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import TIMESHEET_DATA from './Table/TIMESHEET_DATA.json'
import BasicTable from './Table/BasicTable'


const TimeSheet = () => {
 const naviagte = useNavigate();
  const handleShow = () => naviagte("/timeSheetAddForm");
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
        Header:"EMPLOYEE",
        accessor:"employee"
    },
    {
        Header:"DATE",
        accessor:"date"
    },
    {
        Header:"PROJECT",
        accessor:"project"
    },
    {
        Header:"ASSIGNED HOURS",
        accessor:"assigned_hour"
    },
    {
        Header:"HOURS",
        accessor:"hours"
    },
    {
      Header:"DESCRIPTION",
      accessor:"description"
  },
    {
        Header:"ACTION",
        accessor:"action",
        Cell:()=>(
            <div className='d-flex align-items-center justify-content-center flex-row'>
            <Link to={"/timeSheetEditForm"} ><Button variant='warning' ><FaEdit/></Button></Link>
            <Button variant='danger' className='m-1' onClick={()=>deleteHandleShow()} ><MdDelete/></Button>
            </div>
        )
    }
    
    
]

  return (
    <div>
      <Container fluid>
      <Row className="d-flex  flex-row  justify-content-between align-items-center mt-2">
        <Col className="d-flex  flex-column flex-wrap-wrap align-content-center ">
          <h5>TimeSheet</h5>
          
        </Col>
        <Col className="d-flex  flex-row flex-wrap-wrap justify-content-end align-items-center">
        <Button
            variant="success"
            className="d-lg-none d-xxl-none d-flex d-sm-flex d-md-flex rounded"
            size="sm"
            onClick={handleShow}
          >
            <FaPlus className="m-2" />
            
          </Button>
          <Button
            variant="success"
            className="d-lg-block d-xxl-block d-none d-sm-none rounded"
            size="sm"
            onClick={handleShow}
          >
            <FaPlus className="m-2" />
            Add Work Time
          </Button>
        </Col>
      </Row>
      <Row className=''>
      <BasicTable COLUMNS={COLUMNS} MOCK_DATA={TIMESHEET_DATA} />
    </Row>
  </Container>
  <Modal show={deleteShow} onHide={deleteHandleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>TimeSheet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Confirm to Delete this TimeSheet..?
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
    </div>
  )
}

export default TimeSheet
