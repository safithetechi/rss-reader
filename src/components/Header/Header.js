import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import "./Header.css"

import logo from '../../assets/logo.png'


function Header(props){


    return (
        <Container>

                <Row className="Banner">

                </Row>
                
                <Col className="Details">
                 <Row>
                    <img src={logo} alt="Logo for community" id='cybersecurity-img'/>
                    <h1>{props.title}</h1>
                </Row>
                    <h2 id="Reddit_Title">{props.category}</h2>
                </Col>

        </Container>
    )

}


export default Header;