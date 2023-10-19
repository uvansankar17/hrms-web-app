import React, { useMemo, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import {useTable,useSortBy,usePagination} from 'react-table'
import USERREPORT_DATA from '../pages/Table/USERREPORT_DATA.json'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

const UserReport = () => {
const USERREPORTCOLUMNS = [
    {
        Header:"#",
        accessor:"id"
    },
    {
        Header:"NAME",
        accessor:"Name"
    },
    {
        Header:"COMPANY",
        accessor:"company"
    },
    {
        Header:"EMAIL",
        accessor:"email"
    },
    {
        Header:"ROLE",
        accessor:"role"
    },
    {
        Header:"DESIGNATION",
        accessor:"designation"
    },
    {
        Header:"STATUS",
        accessor:"status"
    },
    
   
]
  const columns = useMemo(()=>USERREPORTCOLUMNS,[]);
  const data = useMemo(()=>USERREPORT_DATA,[]);
   const {getTableProps,getTableBodyProps,headerGroups,prepareRow,page,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,state} = useTable({
    columns,
    data
  },
  useSortBy,usePagination)
  
  const {pageIndex}= state;
  return (
    <>
    <Container fluid className='d-flex flex-column'>
      <Row className='d- flex flex-column mt-2 mb-4'>
        <h5>User Report</h5>
        <span className='text-secondary'>Report/User Report</span>
      </Row>
      <Row className=''>
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
          
          <Col className='m-4'>
          <Form.Select placeholder="Employee Designation"  className="">
            <option disabled selected>
              User Role
            </option>
            <option>FrontEnd Developer</option>
            <option>BackEnd Developer</option>
          </Form.Select>
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
    </>
  )
}

export default UserReport
