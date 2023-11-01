import React from 'react'
import {Container} from 'react-bootstrap'
import '../pages/Css/Sidebar.css'
import ReactSidebar from './ReactSidebar';
import {sidebarItems} from './Table/SIDEMENU_DATA';

const Sidebar = () => {

      
  return (
    <div className='rounded position-fixed'>
     <Container fluid className='d-sm-none sidebar  d-md-none d-lg-block d-xxl-block d-xl-block  justify-content-start align-items-start d-none ' style={{height:"92vh",width:"100%",overflowY:"auto",marginLeft:"-24px"}} >
    <ReactSidebar sidebarItems={sidebarItems}/>
     
    </Container> 
    
    </div>
  )
}

export default Sidebar
