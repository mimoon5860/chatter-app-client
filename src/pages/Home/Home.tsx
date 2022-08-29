import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <h1>Hello React Typescript</h1>
            </Container>
        </div>
    );
};

export default Home;