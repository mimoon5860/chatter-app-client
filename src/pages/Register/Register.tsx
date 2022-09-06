import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './register.css';

const Register = () => {
    const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
    const [registerInfo, setRegisterInfo] = useState<{ name: string, phone: string, email: string, password: string } | {}>({})

    return (
        <div className='bg-wrapper'>
            <Container>
                <div className='text-center'>
                    <img width={200} src="/assets/chatter_logo.png" alt="" />
                </div>
                <Row>
                    <Col className='mx-auto bg-white p-2 mt-3 rounded-3' md={4}>
                        <h3>Registration form</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control onChange={(e) => setRegisterInfo({ ...registerInfo, name: e.target.value })} type="text" placeholder="Enter your full name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control onChange={(e) => setRegisterInfo({ ...registerInfo, phone: e.target.value })} type="text" placeholder="Enter your phone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={(e) => setRegisterInfo({ ...registerInfo, email: e.target.value })} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;