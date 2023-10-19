import React, { useMemo } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import {useTable,useSortBy,usePagination} from 'react-table'
import ATTENDANCEREPORT_DATA from '../pages/Table/ATTENDEANCEREPORT_DATA.json'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

const AttendanceReport = () => {
  const ATTENDANCEREPORTCOLUMNS = [
    {
        Header:"#",
        accessor:"id"
    },
    {
        Header:"DATE",
        accessor:"date"
    },
    {
        Header:"CHECK IN",
        accessor:"check_in"
    },
    {
        Header:"CHECK OUT",
        accessor:"check_out"
    },
    {
        Header:"WORK STATUS",
        accessor:"work_status"
    },
 
]
  const columns = useMemo(()=>ATTENDANCEREPORTCOLUMNS,[]);
  const data = useMemo(()=>ATTENDANCEREPORT_DATA,[]);
   const {getTableProps,getTableBodyProps,headerGroups,prepareRow,page,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,state} = useTable({
    columns,
    data
  },
  useSortBy,usePagination)
  
  const {pageIndex}= state;
  return (
    <>
        <Container>
      <Row className='d- flex flex-row mt-2 mb-4'>
        <Col className='d-flex justify-content-start'>
        <h5>Attendance Report</h5>
        </Col>
      </Row>
      <Row>
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
          <Form.Control
            placeholder="Employee Name"
            className="m-2"
          ></Form.Control>
          
          <Form.Control  placeholder='From' type='month' className="m-2">
            
          </Form.Control>
          <Form.Control  placeholder='To'  type='month'  className="m-2">
            
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
        <Table {...getTableProps()} responsive={true}>
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

export default AttendanceReport
