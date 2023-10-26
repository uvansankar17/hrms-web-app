import React, { useState } from 'react'
import { Button, Col, Container,Modal, Row} from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import  TICKET_DATA  from './Table/TICKET_DATA.json'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import BasicTable from './Table/BasicTable'

const Tickets = () => {
  const navigate =useNavigate()
  const [deleteShow, setDeleteShow] = useState(false);
    const deleteHandleClose = () => {
        setDeleteShow(false);
      }
      const deleteHandleShow = () => {
        setDeleteShow(true);
      }
  const handleShow = () =>navigate("/ticketAddForm");

 

  const COLUMNS = [
    {
        Header:"#",
        accessor:"id"
    },
    {
        Header:"PROJECT NAME",
        accessor:"project"
    },
    {
        Header:"TICKET ID",
        accessor:"ticket_id"
    },
    {
        Header:"ASSIGN TO",
        accessor:"assign_to"
    },
    {
        Header:"TICKET FOLLOWERS",
        accessor:"ticket_follower"
    },
    {
      Header:"CLIENT",
      accessor:"client"
  },
  {
    Header:"CREATED DATE",
    accessor:"create_date"
  },
    {
        Header:"PRIORITY",
        accessor:"priority"
    },
    {
      Header:"STATUS",
      accessor:"status"
  },

{
  Header:"DESCRIPTION",
  accessor:"description"
},
{
  Header:"ATTACHMENT",
  accessor:"attachment"
},
    {
        Header:"ACTION",
        accessor:"action",
        Cell:()=>(
            <div className='d-flex align-items-center justify-content-center flex-row'>
            <Link to={"/ticketEditForm"} ><Button variant='warning' ><FaEdit/></Button></Link>
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
        <h4>Tickets</h4>
        
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
          Add Ticket
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
    <BasicTable COLUMNS={COLUMNS} MOCK_DATA={TICKET_DATA} />
    </Row>
  </Container>
  <Modal show={deleteShow} onHide={deleteHandleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Promotion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Confirm to Delete this Ticket..?
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

export default Tickets
