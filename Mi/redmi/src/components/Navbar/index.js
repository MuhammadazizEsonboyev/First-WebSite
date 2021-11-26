import React from 'react'
import './index.css';
import img from './img/rasm.png'
import { Navbar, Container, Nav } from 'react-bootstrap'



export default function Navlink() {
    return (
        <header>
            <div className="container d-none d-lg-block">
                <div  className="row navbar   d-flex justify-content-between">
                    <div className="col-2">
                        <img className="img" src={img} alt="jpg"></img>
                    </div>
                    <div className="col-7 d-flex justify-content-center">
                        <ul className="nav-item1 d-flex">
                            <li className="nav-lin active"><a href="#!">Home</a></li>
                            <li className="nav-lin"><a href="#!">About</a></li>
                            <li className="nav-lin"><a href="#!">Menu</a></li>
                            <li className="nav-lin"><a href="#!">Reservation</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-block d-lg-none">
            <Navbar bg="black" className=" d-block d-lg-none" expand="lg">
                        <Container>
                            <Navbar.Brand style={{color : 'white'}} href="#home"><img className="img" src={img} alt="jpg"></img></Navbar.Brand>
                            <Navbar.Toggle className="td" aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link style={{color : 'white'}} href="#home">Home</Nav.Link>
                                    <Nav.Link style={{color : 'white'}} href="#link">Link</Nav.Link>
                                    <Nav.Link style={{color : 'white'}} href="#link">About</Nav.Link>
                                    <Nav.Link style={{color : 'white'}} href="#link">Reservation</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </div>
        </header>
    )
}
