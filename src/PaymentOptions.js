import React from 'react'
import { Row, Col, Modal } from 'react-bootstrap';
import amazon from './img/amazon.png';
import cash from './img/cash.png';
import createdanddabit from './img/createdanddabit.png';
import lazypay from './img/lazypay.png';
import paytm from './img/paytm.png';
import simple from './img/simple.png';
import { useHistory } from "react-router-dom";


const PaymentOptions = (props) => {
    let history = useHistory()

        const gotolandingpage = (e)=>{
            history.push("/landing-page")
        }

    return (
        <Modal
            size="lg"
            {...props}
            dialogClassName="fullscreen-modal"
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Row className="pl-3">
                    <Col xs={12} md={12} className="text-left" >
                        <h3>Payment Options</h3>
                    </Col>
                </Row>
                <Row className="pl-4">
                    <Col xs={12} md={12} className="text-left" >
                        <h5>Payment Method</h5>
                    </Col>
                </Row>

                <Row className="pl-2 pt-2 pr-2" onClick={gotolandingpage}>
                    <Col xs={2} md={2} className="text-right payment-padding" >
                        <img alt="img"  src={cash} />
                    </Col>
                    <Col xs={8} md={8} className="pb-10 text-left border-bottom payment-list" >
                       <span>Cash</span> 
                    </Col>
                    <Col xs={2} md={2} className="text-center border-bottom payment-list">
                    <i className="fas fa-check"></i>
                    </Col>

                </Row>

                <Row className="pl-2 pt-2 pr-2" onClick={gotolandingpage}>
                    <Col xs={2} md={2} className="text-right payment-padding" >
                    <img alt="img"  src={amazon} />
                    </Col>
                    <Col xs={8} md={8} className=" pb-10 pl-3 text-left border-bottom payment-list" >
                        Amazon Pay
                    </Col>
                    <Col xs={2} md={2} className="text-center border-bottom payment-list">

                        <i className="fas fa-angle-right"></i>
                    </Col>

                </Row>

                <Row className="pl-2 pt-2 pr-2" onClick={gotolandingpage}>
                    <Col xs={2} md={2} className="text-right payment-padding" >
                    <img alt="img"  src={createdanddabit} />

                    </Col>
                    <Col xs={8} md={8} className=" pb-10 pl-3 text-left border-bottom payment-list">
                        Credit or debit card
                    </Col>
                    <Col xs={2} md={2} className="text-center border-bottom payment-list">

                        <i className="fas fa-angle-right"></i>
                    </Col>

                </Row>

                <Row className="pl-2 pt-2 pr-2" onClick={gotolandingpage}>
                    <Col xs={2} md={2} className="text-right payment-padding" >
                    <img alt="img"  src={paytm} />
                    </Col>
                    <Col xs={8} md={8} className=" pb-10 pl-3 text-left border-bottom payment-list" >
                        Paytm
                    </Col>
                    <Col xs={2} md={2} className="text-center border-bottom payment-list">
                        <i className="fas fa-angle-right"></i>
                    </Col>

                </Row>

                <Row className="pl-3">
                    <Col xs={12} md={12} className="text-left" >
                        <h3>Pay Later</h3>
                    </Col>
                </Row>

                <Row className="pl-2 pt-2 pr-2" onClick={gotolandingpage}>
                    <Col xs={2} md={2} className="text-right payment-padding" >
                    <img alt="img"  src={lazypay} />
                    </Col>
                    <Col xs={8} md={8} className=" pb-10 pl-3 text-left border-bottom payment-list" >
                        Lazypay
                    </Col>
                    <Col xs={2} md={2} className="text-center border-bottom payment-list" >

                        <i className="fas fa-angle-right"></i>
                    </Col>

                </Row>

                <Row className="pl-2 pt-2 pr-2" onClick={gotolandingpage}>
                    <Col xs={2} md={2} className="text-right payment-padding" >
                    <img alt="img"  src={simple} />
                    </Col>
                    <Col xs={8} md={8} className=" pb-10 pl-3 text-left border-bottom payment-list" >
                        Siiple
                    </Col>
                    <Col xs={2} md={2} className="text-center border-bottom payment-list" >

                        <i className="fas fa-angle-right"></i>
                    </Col>

                </Row>

            </Modal.Body>
        </Modal>
    );
}

export default PaymentOptions
