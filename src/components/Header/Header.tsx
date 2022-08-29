import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import SearchBar from './HeaderComponents/SearchBar';

const Header = () => {

    const searchInput = (input: string): void => {

    }

    const handleSearch = (): void => {

    }
    return (
        <div className='header-wrapper'>
            <Container>
                <div className='d-flex justify-content-between py-2'>
                    <ul className='d-flex gap-2'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                    <SearchBar handleSearch={handleSearch} inputChange={searchInput} />
                    <button>Logout</button>
                </div>
            </Container>
        </div>
    );
};

export default Header;