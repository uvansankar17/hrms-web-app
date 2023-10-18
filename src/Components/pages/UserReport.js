import React, { useMemo, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import {useTable,useSortBy,usePagination} from 'react-table'
import MOCK_DATA from '../pages/Table/MOCK_DATA.json'
import {COLUMNS} from '../pages/Table/Columns'

const UserReport = () => {
  const columns = useMemo(()=>COLUMNS,[]);
  const data = useMemo(()=>MOCK_DATA,[]);
   const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,page,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,state} = useTable({
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
        <Table {...getTableProps()} responsive={true}>
          <thead>
            {
              headerGroups.map((headerGroups)=>(
                <tr {...headerGroups.getHeaderGroupProps()}>
                  {
                    headerGroups.headers.map((column)=>(
                      <th  {...column.getHeaderProps(column.getSortByToggleProps())}>
                                  {column.render('Header')}
 
                               {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
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
        <span>
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
