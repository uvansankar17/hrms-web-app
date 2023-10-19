import React, { useMemo } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import {useTable,useSortBy,usePagination} from 'react-table'
import LEAVEREPORT_DATA from '../pages/Table/LEAVEREPORT_DATA.json'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

const LeaveReport = () => {
  const LEAVEREPORTCOLUMNS = [
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
        Header:"DEPARTMENT",
        accessor:"department"
    },
    {
        Header:"LEAVE TYPE",
        accessor:"leave_type"
    },
    {
        Header:"NO. OF DAYS",
        accessor:"no_of_days"
    },
    {
        Header:"REMAINING LEAVE",
        accessor:"remaining_leave"
    },
    {
      Header:"TOTAL LEAVE",
      accessor:"total_leave"
  },
  {
    Header:"TOTAL LEAVE TAKEN",
    accessor:"total_leave_taken"
},
{
  Header:"LEAVE CARRY FORWARD",
  accessor:"leave_carry_forward"
},
    
   
]
  const columns = useMemo(()=>LEAVEREPORTCOLUMNS,[]);
  const data = useMemo(()=>LEAVEREPORT_DATA,[]);
   const {getTableProps,getTableBodyProps,headerGroups,prepareRow,page,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,state} = useTable({
    columns,
    data
  },
  useSortBy,usePagination)
  
  const {pageIndex}= state;
  return (
    <>
    <Container>
      <Row className='d- flex flex-row mt-2 mb-4 align-items-center'>
        <Col className='d-flex flex-column justify-content-start'>
        <h5>Leave Report</h5>
        <span className='text-secondary'>Report/Leave Report</span>
        </Col>
        <Col className='d-flex justify-content-end'>
        <Button variant='warning'>Pdf</Button>
        </Col>
      </Row>
      <Row>
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
          <Form.Control
            placeholder="Employee"
            className="m-2"
          ></Form.Control>
          
          <Form.Select placeholder="Select Department" className="m-2">
            <option disabled selected>
              Select Department
            </option>
            <option>FrontEnd Developer</option>
            <option>BackEnd Developer</option>
          </Form.Select>
          <Form.Control  placeholder='From' type='date' className="m-2">
            
          </Form.Control>
          <Form.Control  placeholder='To' type='date' className="m-2">
            
          </Form.Control>
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
        <Table striped bordered hover {...getTableProps()} responsive={true}>
          <thead>
            {
              headerGroups.map((headerGroups)=>(
                <tr {...headerGroups.getHeaderGroupProps()}>
                  {
                    headerGroups.headers.map((column)=>(
                      <th style={{fontSize:"10px"}} {...column.getHeaderProps(column.getSortByToggleProps())}>
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

export default LeaveReport
