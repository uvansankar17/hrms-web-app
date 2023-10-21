import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import MainLogo from "../Images/logo.jpeg";
import { usePDF } from 'react-to-pdf';

const PaySlip = () => {
  const { toPDF, targetRef } = usePDF({filename: 'SalarySlip-SEP-2023.pdf'});
  return (
    <div>
      <Container>
      <Row className='d- flex flex-row mt-2 mb-4 align-items-center'>
        <Col className='d-flex flex-column justify-content-start'>
        <h4>PaySlip</h4>
        </Col>
        <Col className='d-flex justify-content-end'>
        <Button variant='warning' onClick={() => toPDF()}>Pdf</Button>
        </Col>
      </Row>
      <Row className='mt-2 mb-4' style={{boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"}} ref={targetRef}>
      <Row className='d- flex flex-row mb-xxl-4 mb-xl-4 mb-lg-4 mb-sm-2 mb-md-2 align-items-center'>
        <Col className='mt-4 d-flex justify-content-center'>
        <h6 style={{textDecoration:"underline"}}>PAYSLIP FOR THE MONTH OF SEP 2023</h6>
        </Col>
      </Row>
      <Row className='d-flex flex-xxl-row flex-xl-row flex-lg-row flex-sm-column flex-column flex-md-column mt-2 mb-2 align-items-center justify-content-sm-center justify-content-md-center'>
        <Col className='d-flex flex-column align-items-xxl-start justify-content-xxl-start align-items-xl-start justify-content-xl-start align-items-lg-start justify-content-lg-start align-items-md-center justify-content-md-center align-items-sm-center justify-content-sm-center align-items-center justify-content-center'>
        <div className='d-flex flex-column align-items-center justify-content-center'>
        <img
              src={MainLogo}
              width={60}
              className="rounded-circle "
              alt="..."
            ></img>
        </div>
            <div className='mt-sm-2 mt-md-2 mt-xxl-0 mt-xl-0 mt-lg-0 mt-2 d-sm-flex d-flex d-md-flex flex-column align-items-xxl-start justify-content-xxl-start align-items-xl-start justify-content-xl-start align-items-lg-start justify-content-lg-start align-items-md-center justify-content-md-center align-items-sm-center justify-content-sm-center align-items-center justify-content-center'>
              <p className='m-0'>DriftMark Technologies</p>
              <p className='m-0'>3864 xxx , yyy</p>
              <p className='m-0'>xxxxxxxxxxxxx</p>
            </div>
        </Col>
        <Col className='mt-sm-2 mt-md-2 mt-xxl-0 mt-xl-0 mt-lg-0 mt-4 d-flex flex-column align-items-xxl-end justify-content-xxl-end align-items-xl-end justify-content-xl-end align-items-lg-end justify-content-lg-end align-items-md-center justify-content-md-center align-items-sm-center justify-content-sm-center align-items-center justify-content-center'>
        <h6>PAYSLIP #497564</h6>
        <p>Salary Month : Sep 2023</p>
        </Col>
      </Row>
      <Row>
        <Col>
              <address>
                <strong className='m-0'>John Doe</strong>
                <p className='m-1'>Web Designer</p>
                <p className='m-1'>Employee ID: DT-0028</p>
                <p className='m-1'>Joining Date : 1 JAN 2022</p>
              </address>
        </Col>
      </Row>
      <Row className='mt-2  d-flex flex-xxl-row flex-xl-row flex-lg-row flex-column flex-sm-column flex-md-column justify-content-around align-items-center'>
        <Col className='mt-2 mb-2 d-flex  justify-content-start align-items-center'>
        
          <Col>
          <h5>Earnings</h5>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>Basic Salary</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$6500</p></div>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>House Rent Allowance(H.R.A.)</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$55</p></div>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>Conveyance</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$55</p></div>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>Other Allowance</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$55</p></div>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>Total Earnings</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$55</p></div>
          </Col>
          
        
        </Col>
        <Col className='mt-2 mb-2 d-flex  justify-content-end align-items-center'>
        
        <Col>
          <h5>Deductions</h5>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>Tax Deducted at Source (T.D.S.)</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$0</p></div>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>Provident Fund</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$0</p></div>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>ESI</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$0</p></div>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>Loan</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$300</p></div>
          <div className='d-flex flex-row justify-content-between align-items-center ' style={{border:"1px solid black"}}><strong className='d-flex flex-row justify-content-start align-items-center p-1'>Total Deductions</strong><p className='d-flex flex-row justify-content-end align-items-center p-1'>$59698</p></div>
          </Col>
          
        
        </Col>
      </Row>
      <Row className='mt-2 mb-2'>
        <Col>
        <p><strong>Net Salary : $59698 </strong>(Fifty Nine Thousand Six Hundred Ninety Eight)</p>
        </Col>
      </Row>
      </Row>
      
      </Container>
    </div>
  )
}

export default PaySlip
