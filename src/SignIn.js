import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import spicejectlogo from './img/spicejectlogo.png';
import spicescreen from './img/spicescreen.png';
import { useHistory } from "react-router-dom";


const SignIn = (props) => {
    let history = useHistory()
    const { setmodalshow } = props;

    const init = { from: "", to: "", firstName: "", lastName: "", gender: "mrs", email: "", mobile: "", DOB: "", STD: "" }
    const [formValue, setFormValue] = useState(init);

    const AutofillAction = (e) => {
        setFormValue({ from: "Noida", to: "Delhi", firstName: "bhanu", lastName: "pratap", gender: "mr", email: "bhanu@gmail.com", mobile: "9758760136", DOB: "22-7-2021", STD: "05:45 AM" })
    }

    const ClosePopup = (e) => {
        setFormValue(init)
        setmodalshow(false)
        history.push('/confirm-location')
    }

    const changeGander = (e) =>{
        // console.log(e)
       setFormValue({...formValue, 'gender':e})
    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">

            <Modal.Body className="show-grid">
                <Container fluid className="p-0">
                    <Row className="p-0">
                        <Col xs={6} md={6} className="text-left">
                            <img alt="img"  src={spicescreen} />
                        </Col>
                        <Col xs={6} md={6} className="text-right">
                            <img alt="img"  src={spicejectlogo} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} className="text-center">
                            <h5>SIGN IN</h5>
                        </Col>
                    </Row>

                    <Form>

                        <Row>
                            <Col xs={6} md={6} className="forminput">
                                <Form.Group controlId="formBasicform">
                                    <Form.Control type="text" className="shadow" placeholder="From" value={formValue.from} onChange={e => console.log(e)} />
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={6} className="forminput">
                                <Form.Group controlId="formBasicto">
                                    <Form.Control type="text" className="shadow" placeholder="To" value={formValue.to} onChange={e => console.log(e)} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={6} className="forminput">
                                <Form.Group controlId="formBasicdob">
                                    <Form.Control type="text" className="shadow" placeholder="DD-MM-YYYY" value={formValue.DOB} onChange={e => console.log(e)} />
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={6} className="forminput">
                                <Form.Group controlId="formBasicstd">
                                    <Form.Control type="text" className="shadow" placeholder="STD:00:00               ETA:00:00" value={formValue.STD} onChange={e => console.log(e)} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                        <Col xs={2} md={2} className="forminput">
                                <Form.Group controlId="formBasicmrs">
                                    <Form.Check
                                        type='radio'
                                        label={`Mrs.`}
                                        checked={formValue.gender === 'mrs' ? true : false}
                                        onChange={()=>changeGander('mrs')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={2} md={2} className="forminput">
                                <Form.Group controlId="formBasicmr">
                                    <Form.Check
                                        type='radio'
                                        label={`Mr.`}
                                        checked={formValue.gender === 'mr' ? true : false}
                                        onChange={()=>changeGander('mr')}
                                    />
                                </Form.Group>
                            </Col>
                            
                            <Col xs={2} md={2} className="forminput">
                                <Form.Group controlId="formBasicms">
                                    <Form.Check
                                        type='radio'
                                        label={`Ms.`}
                                        checked={formValue.gender === 'ms' ? true : false}
                                        onChange={()=>changeGander('ms')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={6} className="forminput">
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={6} className="forminput">
                                <Form.Group controlId="formBasicfirstname">
                                    <Form.Control type="text" className="shadow" placeholder="First Name" value={formValue.firstName} onChange={e => console.log(e)} />
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={6} className="forminput">
                                <Form.Group controlId="formBasiclastname">
                                    <Form.Control type="text" className="shadow" placeholder="Last Name" value={formValue.lastName} onChange={e => console.log(e)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} className="forminput">
                                <Form.Group controlId="formBasicmobile">
                                    <Form.Control type="text" className="shadow" placeholder="Enter Your Mobile Number" value={formValue.mobile} onChange={e => console.log(e)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} className="forminput">
                                <Form.Group controlId="formBasicaddress">
                                    <Form.Control type="text" className="shadow" placeholder="Enter Your Email Address" value={formValue.email} onChange={e => console.log(e)} />
                                </Form.Group>
                            </Col>
                        </Row>

                        {formValue.firstName === '' ?
                            <Row>
                                <Col xs={6} md={6} className="p-0">
                                    <Button className="leftButton" onClick={AutofillAction}>AUTO FILL</Button>
                                </Col>
                                <Col xs={6} md={6} className="p-0 text-center">
                                    <Link to="" onClick={(e) => { setmodalshow(false) }}>I WILL ENTER</Link>
                                </Col>
                            </Row>
                            :
                            <Row>
                                <Col xs={12} md={12}>
                                    <Button className="leftButton" onClick={ClosePopup}>Continue</Button>
                                </Col>
                            </Row>
                        }

                    </Form>

                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default SignIn
