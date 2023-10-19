import React, { useMemo, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaPlus } from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import PROJECT_DATA from './Table/PROJECT_DATA.json'
import { MdDelete } from 'react-icons/md';
import {useTable,useSortBy,usePagination} from 'react-table'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const Projects = () => {
 const navigate =useNavigate()
  const handleShow = () =>navigate("/projectAddForm");
  const [deleteShow, setDeleteShow] = useState(false);
    const deleteHandleClose = () => {
        setDeleteShow(false);
      }
      const deleteHandleShow = () => {
        setDeleteShow(true);
      }
 
  const ProjectColumns = [
    {
        Header:"#",
        accessor:"id"
    },
    {
        Header:"PROJECT",
        accessor:"project"
    },
    {
        Header:"PROJECT ID",
        accessor:"project_id"
    },
    {
        Header:"LEADER",
        accessor:"leader"
    },
    {
        Header:"TEAM",
        accessor:"Team"
    },
    {
        Header:"DEADLINE",
        accessor:"deadline"
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
        Header:"ACTION",
        accessor:"action",
        Cell:()=>(
            <div className='d-flex align-items-center justify-content-center flex-row'>
            <Link to={"/projectEditForm"} ><Button variant='warning' ><FaEdit/></Button></Link>
            <Button variant='danger' className='m-1' onClick={()=>deleteHandleShow()} ><MdDelete/></Button>
            </div>
        )
    }
    
    
]
 
    const columns = useMemo(()=>ProjectColumns,[]);
    const data = useMemo(()=>PROJECT_DATA,[]);
     const {getTableProps,getTableBodyProps,headerGroups,prepareRow,page,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,state} = useTable({
      columns,
      data
    },
    useSortBy,usePagination)
    
    const {pageIndex}= state;
  return (
  <>
    <Container fluid className="">
    <Row className="d-flex  flex-row  justify-content-between align-items-center mt-3 mb-3">
      <Col className="d-flex  flex-column flex-wrap-wrap align-content-center ">
        <h5>Projects</h5>
        
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
          Add project
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
    <Row>
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
        <Form.Control
          placeholder="Project Name"
          className="m-2"
        ></Form.Control>
        <Form.Control
          placeholder="Employee Name"
          className="m-2"
        ></Form.Control>
        <Form.Select placeholder="Designation" className="m-2">
          <option disabled selected>
            Select Role
          </option>
          <option>FrontEnd Developer</option>
          <option>BackEnd Developer</option>
        </Form.Select>
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
  
    <Row>
    <Table {...getTableProps()} responsive={true}>
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
        <Col>
        <span className='m-1'>
          page 
          <strong className='m-2'>
            {pageIndex+1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <Button onClick={()=>previousPage()} disabled={!canPreviousPage} className='m-2'>previous</Button>
        <Button onClick={()=>nextPage()} disabled={!canNextPage}>Next</Button>
        </Col>
    </Row>
  </Container>
  <Modal show={deleteShow} onHide={deleteHandleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Confirm to Delete this Project..?
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

export default Projects
