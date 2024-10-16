import { useState } from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import "./User.css"

export default function UserMail() {
    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("logged")).messages)
    const cakes = JSON.parse(localStorage.getItem("products"))
    let totalPrice = 0
    let products = []

    let showMessages = messages.map(message => {
        let classname = "h4a"
        if (message.status == "Prihvaćeno") classname = "h4g"
        else if (message.status == "Odbijeno") classname = "h4r"
        else classname = "h4a"
        return (
            <Row>
                <Col className="h4b" style={{padding: "1.5%"}}>{message.id}</Col>
                <Col className="h4b" style={{padding: "1.5%"}}>{message.price}</Col>
                <Col className="h4b" style={{padding: "1.5%"}}>{message.date}</Col>
                <Col className={classname} style={{padding: "1.5%"}}>{message.status}</Col>
            </Row>
        )
    })

    return (
        <Container>
            <Row>
                <div className="h2a">Obaveštenja</div>
            </Row>
            <br />
            <Row>
                <Col className="h3b">Narudžbina</Col>
                <Col className="h3b">Iznos</Col>
                <Col className="h3b">Datum</Col>
                <Col className="h3b">Status</Col>
            </Row>
            {showMessages}
        </Container>
    )
}