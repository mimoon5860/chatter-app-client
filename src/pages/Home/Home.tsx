import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Conversations from '../../components/HomeComponents/Conversations';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md={3}>
                        <Conversations />
                    </Col>
                    <Col md={9}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;