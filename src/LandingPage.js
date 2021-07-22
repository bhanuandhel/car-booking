import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import landingcar from './img/landingcar.png';
import tophaderdot from './img/tophaderdot.png';
import bottomdot from './img/bottomdot.png';
import { useHistory } from "react-router-dom";


const LandingPage = () => {
    let history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const gotobackpage = (e) => {
        history.goBack();
    }
    return (
        <Container fluid className="p-2" style={{ backgroundColor: "#f70102", overflowX:"hidden" }} >
            <Row>
                <Col xs={12} md={12} className="text-left">
                    <i class="fas fa-arrow-left text-white" onClick={gotobackpage}></i>
                </Col>
            </Row>
            <Row className="mt-2 pt-2 pb-1 ml-1 mr-1 landing-page">

                <img src={tophaderdot} className="imgcss" />
                <Col xs={3} md={3} className="v2" >
                    <img src={landingcar} className="carlog" />
                </Col>
                <Col xs={6} md={6} className="v2">
                    <span id="span1" >Meru Airport Transport</span><br />
                    <span id="span2">Zero Cancellations </span><br />
                    <span id="span3"> Arrived, 08:49 pm dropoff </span>
                </Col>
                <Col xs={3} md={3} className="text-right v3">
                    <span id="span1">Estimated Price</span><br />
                    <span id="span2">$ 339.00</span><br />
                    <span id="span1">Estimated Distance</span><br />
                    <span id="span2">10 KM</span>

                </Col>
            </Row>

            <Row className="pt-1 ml-1 mr-1 border-bottom second-landing-div">
                <Col xs={12} md={12} className="text-left">
                    <h6>Pick up</h6>
                    <p>T3 Indira Gandhi International Airport, New Delhi</p>
                </Col>
            </Row>

            <Row className="pt-1 ml-1 mr-1 border-bottom second-landing-div" >
                <Col xs={12} md={12} className="text-left">
                    <h6>Drop off</h6>
                    <p>6/1, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana</p>
                </Col>
            </Row>

            <Row className="pt-1 ml-1 mr-1 second-landing-div">
                <Col xs={12} md={12} className="text-left">
                    <h6>Trip fare</h6>
                </Col>

                <div class="card-body card-body-landing">
                    <ul class="list-group" role="list-items">
                        <li class="justify-content-between list-group-item list-group-item-padding ">
                            Base Fare
                            <span class="float-right">$339</span>
                        </li>
                        <li class="justify-content-between list-group-item list-group-item-padding">
                            Minimum fare
                            <span class="float-right">$339</span>
                        </li>
                        <li class="justify-content-between list-group-item list-group-item-padding">
                            Cancellation fee
                            <span class="float-right">$0</span>
                        </li>
                        <li class="justify-content-between list-group-item list-group-item-padding">
                            Discount
                            <span class="float-right">$50</span>
                        </li>
                    </ul>
                </div>

                <Col xs={12} md={12} className="pt-1 pb-1 text-left border-bottom border-top">
                    <span>Total Fare</span> <span class="float-right">$339</span>
                </Col>

            </Row>

            <Row className="pt-2 pb-1 ml-1 mr-1 justify-content-center second-landing-div">
                <span class="float-right" style={{ fontSize: "12px" }}>Discount coupon is only valid on cabs booked through this link</span>

                <Col xs={11} md={11} className="pt-2">
                    <Button className="confirmboxclass">Confirm Meru Cab</Button>
                </Col>
            </Row>
            <Row className="ml-1 mr-1 justify-content-center">
                <img src={bottomdot} className="image-landing-page" />
            </Row>

        </Container>

    )
}

export default LandingPage
