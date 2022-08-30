import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Conversations from '../../components/HomeComponents/Conversations';

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Conversations />
                    </Col>
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;