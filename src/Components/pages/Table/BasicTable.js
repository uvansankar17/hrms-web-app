import React, { useMemo } from 'react'
import {useTable,useSortBy,usePagination,useGlobalFilter} from 'react-table'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { FaSort } from 'react-icons/fa'

const BasicTable = (props) => {
    const columns = useMemo(() => props.COLUMNS ,[props.COLUMNS]);
    const data = useMemo(()=>props.MOCK_DATA,[props.MOCK_DATA]);
     const {getTableProps,getTableBodyProps,headerGroups,setGlobalFilter,prepareRow,page,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,state} = useTable({
      columns,
      data
    },
    useGlobalFilter,
  useSortBy,
  usePagination)
    
    const {pageIndex}= state;
  return (
    <div>
      <Container>
      <Row className=''>
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
          
          <Col className='m-4' xxl={3} xl={3} lg={3} sm={3} md={3}>
          <Form.Control placeholder="Search here..." value={state.globalFilter || ''} onChange={(e)=>setGlobalFilter(e.target.value)}  className=""/>
          </Col>
          <Col className='d-flex flex-column text-center m-4' xxl={3} xl={3} lg={3} sm={3} md={3}>
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
                          <FaSort className='mx-2'/>
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
    </div>
  )
}

export default BasicTable
