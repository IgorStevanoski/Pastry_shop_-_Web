import { useState } from "react"
import { Carousel } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import alertify from "alertifyjs"
import 'alertifyjs/build/css/alertify.css'
import { Container, Row, Col } from 'react-bootstrap';

export default function UserProduct() {
    const { id } = useParams()
    let cakes = JSON.parse(localStorage.getItem("products"))
    const [cake, setCake] = useState(cakes.filter(c => c.id == id)[0])
    const [cnt, setCnt] = useState(1)
    const [text, setText] = useState("")

    let comments = cake.comments
    comments = comments.map(comment => {
        return (
            <div>
                <br />
                <div className="h3b" style={{textAlign: "left", paddingLeft: "10%"}}>{comment.username}: {comment.text}</div>
            </div>
        )
    })

    function changeCnt(change) {
        if (change) setCnt(cnt + 1)
        else setCnt(cnt <= 1 ? cnt : cnt - 1)
    }

    function addToBasket() {
        let user = JSON.parse(localStorage.getItem("logged"))
        const id = cake.id
        let item = { id, cnt }

        let users = JSON.parse(localStorage.getItem("users"))
        console.log(users)
        let i
        for (i = 0; i < users.length; i++) {
            if (users[i].username == user.username) {
                users[i].basket = [...users[i].basket, item]
                user = users[i]
                break;
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("logged", JSON.stringify(user));
        alertify.success("Uspešno dodato u korpu.")
    }

    function addComment() {
        let user = JSON.parse(localStorage.getItem("logged"))
        const username = user.firstname + " " + user.lastname
        const comment = { username, text }
        const tempText = cake
        cake.comments = [...cake.comments, comment]
        setText(tempText)

        let products = JSON.parse(localStorage.getItem("products"))
        let i
        for (i = 0; i < products.length; i++) {
            if (products[i].id == cake.id) {
                products[i] = cake
                break;
            }
        }
        localStorage.setItem("products", JSON.stringify(products));
    }

    return (
        <Container>
            <Row>
                <Col>
                    <img className="image"
                        src={cake.image} style={{ width: "600px" }}>
                    </img>
                </Col>
                <Col style={{textAlign: "left", paddingLeft: "10%"}}>
                <br /> <br />
                    <div className="h3b">Naziv: {cake.name}</div>
                    <br />
                    <div className="h3b">Opis: {cake.description}</div>
                    <br />
                    <div className="h3b">Cena: {cake.price}</div>
                    <br />
                    <div className="h3b">Sastav: {cake.composition}</div>
                    <br /> <br /> <br />
                    <Row>
                        <Col>
                        <div className="h3b">Količina: {cnt}</div>
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <Button name={'-'} clickFunction={() => changeCnt(false)}></Button>
                            {' '}
                            <Button name={'+'} clickFunction={() => changeCnt(true)}></Button>
                        </Col>
                        <Col>
                            <Button name={'Dodajte u korpu'} clickFunction={() => addToBasket()}></Button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                </Col>
            </Row>
            <br />
            <Row>
                <div className="h2b" style={{textAlign: "left"}}>Komentari:</div>
                {comments}
                <div className="h3b" style={{textAlign: "left", paddingTop: "2%", paddingBottom: "1%"}}>
                    Ostavite svoj komentar:
                    </div>
                <textarea rows={4} onChange={(e) => setText(e.target.value)} className="textarea_input"></textarea>
                <div style={{textAlign: "right", paddingTop: "1%", paddingBottom: "5%"}}>
                    <Button name={'Unesite'} clickFunction={() => addComment()}></Button>
                </div>
            </Row>
        </Container>
    )
}