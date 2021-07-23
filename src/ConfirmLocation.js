import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import spicejetblack from './img/spicejetblack.png';
import spicejetscreenblack from './img/spicejetscreenblack.png';
import carlog from './img/carlog.png';
import SimpleMap from './SimpleMap';
import PaymentOptions from './PaymentOptions';
import { useHistory } from "react-router-dom";




const ConfirmLocation = () => {
    const [lgShow, setLgShow] = useState(false);
    let history = useHistory();

    const gotobackpage = (e) => {
        history.goBack();
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Container fluid className="p-0" style={{overflowX:"hidden"}}>
            <Row className="pl-2 topcolorheader">
                <Col xs={12} md={12} className="text-left">
                    <i className="fas fa-arrow-left text-white" onClick={gotobackpage}></i>
                </Col>
            </Row>
            <Row className="p-0 m-0 topcolorheader">
                <Col xs={6} md={6} className="text-left">
                    <img alt="img"  src={spicejetscreenblack} />
                </Col>
                <Col xs={6} md={6} className="text-right">
                    <img alt="img"  src={spicejetblack} />
                </Col>
            </Row>
            <Row className="locationhead">
                <Col xs={4} md={4}>
                    <span>Your Information</span>
                </Col>
                <Col xs={4} md={4}>
                </Col>
                <Col xs={4} md={4}>
                    <i className="fas fa-chevron-down"></i>
                </Col>
            </Row>

            <div className="card  mx-auto shadow mb-1 bg-body rounded">
                <SimpleMap hight='31vh' />
            </div>

            <div className="card  mx-auto shadow bg-body rounded">
                <div className="card-body pb-0">
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="inner-addon right-addon booking-placeholder">
                                <i className="fa fa-search glyphicon glyphicon-search"></i>
                                <input type="text" className="form-control textfield-input shadow rounded" placeholder="Booking ID not found" onChange={e => console.log(e)} />
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-3 pt-3 pb-3" style={{ backgroundColor: "#fe5051" }}>
                        <Col xs={3} md={3} className="v2" >
                            <img alt="img"  src={carlog} className="carlog" />
                        </Col>
                        <Col xs={6} md={6} className="v2">
                            <span id="span1" className="text-white">Meru Airport Transport</span><br />
                            <span id="span2" className="text-white">Zero Cancellations </span><br />
                            <span id="span3" className="text-white"> Arrived, 08:49 pm dropoff </span>
                        </Col>
                        <Col xs={3} md={3} className="text-right v3">
                            <span id="span1" className="text-white">Estimated Price</span><br />
                            <span id="span2" className="text-white">$ 339.00</span><br />
                            <span id="span1" className="text-white">Estimated Distance</span><br />
                            <span id="span2" className="text-white">10 KM</span>

                        </Col>
                    </Row>
                </div>
            </div>

            <div className="card  mx-auto shadow bg-body rounded vl">
                <Row className="pt-2 pb-2" onClick={() => setLgShow(true)}>
                    <Col xs={3} md={3} className="text-center" >
                        <i className="fas fa-money-bill"></i>
                    </Col>
                    <Col xs={6} md={6} className="text-left carimg">
                        <span>Cash</span>
                    </Col>
                    <Col xs={3} md={3} className="text-center">
                        <i className="fas fa-angle-right"></i>
                    </Col>
                </Row>
                <Row className="justify-content-center pb-2">
                    <Col xs={11} md={11}>
                        <Button className="confirmboxclass" onClick={() => setLgShow(true)}>Confirm Location</Button>
                    </Col>
                </Row>
            </div>

            <PaymentOptions
                show={lgShow}
                onHide={() => setLgShow(false)}
            />
        </Container>

    )
}

export default ConfirmLocation
