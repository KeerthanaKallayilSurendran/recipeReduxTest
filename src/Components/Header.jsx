import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import logo from '../assets/burger.png'
const Header = () => {
    return (
        <  >
            <Navbar className="bg-success shadow">
                <Container>
                    <Navbar.Brand className='text-light fs-3 fw-bolder'>
                        <img
                            alt=""
                            src={logo}
                            width="80"
                            height="80"
                        />
                        TasteBites
                    </Navbar.Brand>
                    
                </Container>
            </Navbar>
        </ >
    )
}

export default Header