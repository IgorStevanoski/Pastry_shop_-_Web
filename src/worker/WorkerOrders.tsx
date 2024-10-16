import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import DropDown from '../components/DropDown';
import { useState } from 'react';
import alertify from "alertifyjs"
import 'alertifyjs/build/css/alertify.css'
import { Col, Container, Row } from 'react-bootstrap';

export default function WorkerOrders() {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")))
    let messages = []
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users[i].messages.length; j++) {
            if (users[i].messages[j].status != "Čeka se") continue
            let id = users[i].messages[j].id
            let price = users[i].messages[j].price
            let date = users[i].messages[j].date
            let user = users[i].firstname + " " + users[i].lastname
            messages.push({ id, price, date, user })
        }
    }
    messages.sort((a, b) => (a.id > b.id ? -1 : 1))

    function AcceptOrder(id) {
        let tempUsers = [...users]
        for (let i = 0; i < tempUsers.length; i++) {
            for (let j = 0; j < tempUsers[i].messages.length; j++) {
                if (tempUsers[i].messages[j].id == id) {
                    tempUsers[i].messages[j].status = "Prihvaćeno"
                    setUsers(tempUsers)
                    localStorage.setItem("users", JSON.stringify(tempUsers))
                }
            }
        }
    }

    function DenyOrder(id) {
        let tempUsers = [...users]
        for (let i = 0; i < tempUsers.length; i++) {
            for (let j = 0; j < tempUsers[i].messages.length; j++) {
                if (tempUsers[i].messages[j].id == id) {
                    tempUsers[i].messages[j].status = "Odbijeno"
                    setUsers(tempUsers)
                    localStorage.setItem("users", JSON.stringify(tempUsers))
                }
            }
        }
    }


    let showMessages = messages.map(message => {
        return (
            <Row style={{padding: "1.5%"}}>
                <Col className='h4b'>{message.id}</Col>
                <Col className='h4b'>{message.price}</Col>
                <Col className='h4b'>{message.date}</Col>
                <Col className='h4b'>{message.user}</Col>
                <Col>
                    <Row>
                        <Col>
                            <Button wid="100px" name={"Prihvatite"} clickFunction={() => AcceptOrder(message.id)}></Button>
                        </Col>
                        <Col>
                            <Button wid="100px" name={"Odbijte"} clickFunction={() => DenyOrder(message.id)}></Button>
                        </Col>
                    </Row>
                </Col>
            </Row   >
        )
    })

    return (
        <Container>
            <Row>
                <div className='h2a'>Narudžbine:</div>
            </Row>
            <Row style={{padding: "2%"}}>
                <Col className='h3b'>Narudžbine</Col>
                <Col className='h3b'>Iznos</Col>
                <Col className='h3b'>Datum</Col>
                <Col className='h3b'>Kupac</Col>
                <Col></Col>
            </Row>
            {showMessages}
        </Container>
    )
}