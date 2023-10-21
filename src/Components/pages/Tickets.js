import React, { useMemo, useState } from 'react'
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

import  TICKET_DATA  from './Table/TICKET_DATA.json'
import {useTable,useSortBy,usePagination,useGlobalFilter} from 'react-table'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { BiLeftArrow, BiRightArrow} from 'react-icons/bi'


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

 
const columns = useMemo(() => {
  const TicketColumns = [
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
  return TicketColumns;
}, []);
    const data = useMemo(()=>TICKET_DATA ,[]);
     const {getTableProps,getTableBodyProps,headerGroups,setGlobalFilter,prepareRow,page,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,state} = useTable({
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination)
    
    const {pageIndex}= state;
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
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
          
          <Col className='m-4'>
          <Form.Control placeholder="Search here..." value={state.globalFilter || ''} onChange={(e)=>setGlobalFilter(e.target.value)}  className=""/>
          </Col>
          <Col className='d-flex flex-column text-center m-4'>
          <Button
          
            className=" text-dark fw-bold "
            style={{
              backgroundColor: "#00d4ff",
              outline: "none",
              border: "none",
            }}
          >
            Search
          </Button>
          </Col>
        </Form>
      </Row>
    <Row>
    <Table striped bordered hover {...getTableProps()} responsive={true}>
          <thead>
            {
              headerGroups.map((headerGroups)=>(
                <tr {...headerGroups.getHeaderGroupProps()}>
                  {
                    headerGroups.headers.map((column)=>(
                      <th  {...column.getHeaderProps(column.getSortByToggleProps())}>
                                  {column.render('Header')}
 
                               {column.isSorted ? (column.isSortedDesc ? <AiOutlineArrowDown className='m-1'/> : <AiOutlineArrowUp className='m-1'/>) : ''}
</th>
                    ))
                  }
              </tr>
              ))
            }
           
          </thead>
          <tbody {...getTableBodyProps()}>
            
              {
                page.map(row => {
                  prepareRow(row)
                  return(
                    <tr {...row.getRowProps()}>
                      {
                        row.cells.map((cell)=>{
                          return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        })
                      }
                    </tr>
                  )
                })
              }
             
          </tbody>
        </Table>
        <Col className='d-flex flex-row justify-content-center align-items-center'>
        <span className='m-1 d-flex justify-content-start align-items-center'>
          page 
          <strong className='m-2'>
            {pageIndex+1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <Col className='d-none d-sm-none d-md-none d-xxl-flex d-xl-flex d-lg-flex justify-content-end align-items-center'>
        <Button onClick={()=>previousPage()} disabled={!canPreviousPage} className='m-2'>previous</Button>
        <Button onClick={()=>nextPage()} disabled={!canNextPage}>Next</Button>
        </Col>
        <Col className='d-flex d-sm-flex d-md-flex d-xxl-none d-xl-none d-lg-none justify-content-end align-items-center'>
        <Button onClick={()=>previousPage()} disabled={!canPreviousPage} className='m-2'><BiLeftArrow size={16}/></Button>
        <Button onClick={()=>nextPage()} disabled={!canNextPage}><BiRightArrow size={16}/></Button>
        </Col>
        </Col>
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

export default Tickets
