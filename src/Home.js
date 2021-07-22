import React, {useState, useEffect} from 'react'
import logo from './img/logo.png';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SimpleMap from './SimpleMap';
import SignIn from './SignIn'
const Home = () => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
      window.scrollTo(0, 0);
  }, [])

    return (
        <Container fluid>
        <Row className="p-1 navColor">
          <Col xs={6} md={6} className="text-left">
            <img src={logo} />
          </Col>
          <Col xs={6} md={6} className="text-right spanFont">
            <span>MOBILE BOARDING PASS</span>
          </Col>
        </Row>
        <Row className="fisrtRow text-center pt-1">
          <Col xs={5} md={4} >
            <span>From</span>
            <p style={{ color: "#c50a2c" }}>PASSENGER</p>
          </Col>
          <Col xs={2} md={4}>
            <i className="fas fa-plane" style={{ color: "#c50a2c" }}></i>
          </Col>
          <Col xs={5} md={4}>
            <span>To</span>
            <p>Your Name</p>
          </Col>
        </Row>

        <Row className="secondRow text-center">
          <Col xs={4} md={4}>
            <span>DATE</span>
            <p>DD-MM-YYYY</p>
          </Col>
          <Col xs={4} md={4}>
          <span>DEPART</span>
          <p>00:00</p>
          </Col>
          <Col xs={4} md={4}>
            <span>ARRIVE</span>
            <p>00:00</p>
          </Col>
        </Row>
        <Row >
        <SimpleMap hight='30vh' />
        </Row>
        <Row className="p-1">
          <Col xs={4} md={6}>
          </Col>
          <Col xs={8} md={6} className="maplocationButton text-center" style={{fontWeight:"bold"}}>
            PickUp Location
          </Col>
          </Row>
          <Row >
          <Col xs={4} md={6} className="maplocationButton pt-2 pb-1" style={{margin:"1px", maxWidth:"49%", fontSize:"9px", fontWeight:"bold"}}>
          PickUp Time & Date
          </Col>
          <Col xs={8} md={6} className="maplocationButton maptext text-center">
            Drop Location
          </Col>
        </Row>

        <Row className="p-1">
        <Col xs={12} md={12} className="carimg">
            <span>Cab Type</span>
        </Col>
        </Row>
        <Row>
          <Col xs={4} md={4} style={{display:"flex"}}>
          <Form.Check type="radio" aria-label="radio 1" checked={true} className="form-check-input-radio" />
          <img src={img1} />
          </Col>
          <Col xs={4} md={4} style={{display:"flex"}}>
          <Form.Check type="radio" aria-label="radio 1" className="form-check-input-radio" />
          <img src={img2} />
          </Col>
          <Col xs={4} md={4} style={{display:"flex"}}>
          <Form.Check type="radio" aria-label="radio 1" className="form-check-input-radio" />
          <img src={img3} />
          </Col>
          
        </Row>
        <Row className="text-center">
          <Col xs={4} md={4} className="carimg">
          <span>Mini $ 150</span>
          </Col>
          <Col xs={4} md={4} className="carimg">
          <span>Mini $ 150</span>
          </Col>
          <Col xs={4} md={4} className="carimg">
          <span>Mini $ 150</span>
          </Col>
          
        </Row>
        <Row className="p-1">
          <Col xs={6} md={6} className="p-0">
          <Button className="leftButton" onClick={() => setModalShow(true)}>DEPARTURE</Button>
          </Col>
          <Col xs={6} md={6} className="p-0">
          <Button className="rightButton" >ARRIVAL</Button>

          </Col>
        </Row>

        <SignIn 
            show={modalShow} 
            setmodalshow ={setModalShow} 
        />
      </Container>
   
    )
}

export default Home
