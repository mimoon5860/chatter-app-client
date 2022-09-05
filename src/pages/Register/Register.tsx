import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './register.css';

const Register = () => {
    const [profilePhoto, setProfilePhoto] = useState<File | null>(null);


    return (
        <div className='bg-wrapper'>
            <Container>
                <Row>
                    <Col className='mx-auto bg-white p-2 mt-3 rounded-3' md={4}>
                        <div className='text-center'>
                            <label htmlFor="profileImage">
                                {
                                    profilePhoto ? <img width={150} height={150} className="rounded-circle" src={URL.createObjectURL(profilePhoto)} alt="" /> :
                                        <img width={150} height={150} className="rounded-circle" src="/assets/avatar-image.png" alt="" />
                                }
                                <br />
                                <input onChange={(event) => event.target.files && setProfilePhoto(event.target.files[0])} id="profileImage" name="profileImage" className='d-none' type="file" />
                                <span className='upload-photo-btn mt-3'>Upload photo</span>
                            </label>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your full name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;