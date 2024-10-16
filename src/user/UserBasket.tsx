import { useState } from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import alertify from "alertifyjs"
import 'alertifyjs/build/css/alertify.css'

export default function UserBasket() {
    // const basket = JSON.parse(localStorage.getItem("logged")).basket
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("logged")).basket)
    const cakes = JSON.parse(localStorage.getItem("products"))
    let totalPrice = 0
    let products = []

    for (let i = 0; i < basket.length; i++) {
        for (let j = 0; j < cakes.length; j++) {
            if (basket[i].id === cakes[j].id) {
                let id = cakes[j].id
                let img = cakes[j].image
                let name = cakes[j].name
                let price = cakes[j].price * basket[i].cnt
                let cnt = basket[i].cnt
                totalPrice += price
                products = [...products, { id, img, name, price, cnt }]
            }
        }
    }

    let showproducts = products.map(product => {
        return (
            <div>
                <br />
                <Row>
                    <Col>
                        <img className="image"
                            src={product.img} style={{ width: "200px" }}>
                        </img>
                    </Col>
                    <Col style={{alignItems: "center", display: "flex", justifyContent: "center"}} className="h3b">{product.name}</Col>
                    <Col style={{alignItems: "center", display: "flex", justifyContent: "center"}} className="h3b">{product.price}</Col>
                    <Col style={{alignItems: "center", display: "flex", justifyContent: "center"}} className="h3b">{product.cnt}</Col>
                    <Col style={{alignItems: "center", display: "flex", justifyContent: "center"}}>
                        <Button name={"Uklonite"} clickFunction={() => removeItem(product)}></Button>
                    </Col>
                </Row>
            </div>
        )
    })

    function removeItem(product) {
        products = products.filter(pr => pr != product)
        let tempBasket = []
        for (let i = 0; i < products.length; i++) {
            const id = products[i].id
            const cnt = products[i].cnt
            tempBasket = [...tempBasket, { id, cnt }]
        }
        setBasket(tempBasket)

        let users = JSON.parse(localStorage.getItem("users"))
        let user = JSON.parse(localStorage.getItem("logged"))

        users = users.filter(us => us.username != user.username)
        user.basket = tempBasket
        users = [...users, user]

        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("logged", JSON.stringify(user))
    }

    function makeOrder() {
        if (totalPrice == 0) {
            alertify.error("Korpa je prazna.")
            return
        }

        let orderId = JSON.parse(localStorage.getItem("orderId"))
        localStorage.setItem("orderId", JSON.stringify(orderId + 1))

        let user = JSON.parse(localStorage.getItem("logged"))
        let curr_date = new Date()
        let date = curr_date.getDate()
        let month = curr_date.getMonth()
        let year = curr_date.getFullYear()
        let hour = curr_date.getHours()
        let min = curr_date.getMinutes()

        let str_date = hour + ":" + min + " " + date + "." + month + "." + year + "."

        let message = { id: orderId, price: totalPrice, date: str_date, status: "Čeka se" }
        user.messages = [message, ...user.messages]

        products = []
        setBasket([])

        let users = JSON.parse(localStorage.getItem("users"))

        users = users.filter(us => us.username != user.username)
        user.basket = []
        users = [...users, user]

        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("logged", JSON.stringify(user))

        alertify.success("Uspešno naručeno.")
    }

    return (
        <Container>
            <Row>
                <div className="h2a">Korpa</div>
            </Row>
            <br />
            <Row>
                <Col></Col>
                <Col className="h3b">Naziv</Col>
                <Col className="h3b">Cena</Col>
                <Col className="h3b">Kolicina</Col>
                <Col></Col>
            </Row>
            {showproducts}
            <hr/>
            <Row>
                <Col></Col>
                <Col className="h3b">
                    <Row style={{alignItems: "center", display: "flex", justifyContent: "center", padding: "10px"}}>
                    Ukupno: {totalPrice} din.
                    </Row>
                    <Row style={{alignItems: "center", display: "flex", justifyContent: "center"}}>
                    <Button name={"Naručite"} clickFunction={() => makeOrder()}></Button>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            <Col>
            </Col>
        </Container>
    )
}