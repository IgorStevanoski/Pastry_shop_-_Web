import { useState } from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserContact() {
    return (
        <Container>
            <Row>
                <div className="h2a">Kontakt</div>
            </Row>
            
            <br />
            <Row>
                <Col>
                    <img className="image"
                        src='/images/lokacija.png' style={{ width: "500px" }}>
                    </img>
                </Col>
                <Col>
                    <br />
                    <div className="h3b">Adresa: </div>
                    <div className="h3b">Bulevar Kralja Aleksandra 73, Beograd</div>
                    <br />
                    <div className="h3b">Kontakt telefon:</div>
                    <div className="h3b">060 00 000 00</div>
                    <br />
                    <div className="h3b">Radno vreme:</div>
                    <div className="h3b">radni dani: 08:00 - 20:00</div>
                    <div className="h3b">vikend: neradan</div>
                    <br />
                </Col>
            </Row>
        </Container>
    )
}