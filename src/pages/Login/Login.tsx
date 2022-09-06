import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './login.css';
const Login = () => {
    const [loginInfo, setLoginInfo] = useState<{ phone: string, password: string } | {}>({});

    const handleLogin = (event: React.FormEvent): void => {
        event.preventDefault();

    }
    return (
        <div className='bg-wrapper'>
            <Container fluid>
                <Row>
                    <Col className='mx-auto bg-white p-2 mt-3 rounded-3 ' md={4}>
                        <h3>Login form</h3>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control onChange={(e) => setLoginInfo({ ...loginInfo, phone: e.target.value })} type="text" placeholder="Enter your phone" />
                                <Form.Text className="text-muted">
                                    We'll never share your number with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;