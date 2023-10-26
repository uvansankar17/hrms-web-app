import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { FaEdit,} from "react-icons/fa";
import BasicTable from './Table/BasicTable'
import { Link, useNavigate } from 'react-router-dom';
import PROJECT_DATA from './Table/PROJECT_DATA.json'
import { MdDelete } from 'react-icons/md';
import Header from '../Header';
import DeleteModel from '../DeleteModel';


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
 
  const COLUMNS = [
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
      accessor:"team"
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
    
  return (
  <>
    <Container fluid className="">
    <Row>
    <Header ONCLICK={handleShow} HEADING="Projects" BUTTON_NAME="Add Project"/>
    </Row>
    <Row className=''>
    <BasicTable COLUMNS={COLUMNS} MOCK_DATA={PROJECT_DATA} />
    </Row>
  </Container>
  <DeleteModel DELETESTATE={deleteShow} ONCLICK={deleteHandleClose} DESCRIPTION="Project" DELETETITLE="Project"/>
  </>
  
  )
}

export default Projects
