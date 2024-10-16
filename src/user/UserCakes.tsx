import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { Container, Row, Col } from 'react-bootstrap';

export const enum ProductType {
    Cake = 0,
    Cookie,
    Promotion
}

export default function UserCakes({ productType }) {
    let header = ""
    let type = ""

    const [currentPage, setCurrentPage] = useState(1)
    const [cakesPerPage, setcakesPerPage] = useState(3)


    switch (productType) {
        case ProductType.Cake: header = "Torte:"; type = "Torta"; break;
        case ProductType.Cookie: header = "Kolači:"; type = "Kolač"; break;
    }

    let cakes = JSON.parse(localStorage.getItem("products"))
    let showcakes = cakes.filter(cake => cake.type == type)
    showcakes = showcakes.map(cake => {
        return (
            <Col>
                <div className="h3a">{cake.name}</div>
                <Link to={'/userProduct/' + cake.id}>
                    <img className="image"
                        src={cake.image} style={{ width: "400px" }}>
                    </img>
                </Link>
            </Col>
        )
    })

    const indexOfLastCake = currentPage * cakesPerPage
    const indexOfFirstCake = indexOfLastCake - cakesPerPage
    const totalCakes = showcakes.length
    showcakes = showcakes.slice(indexOfFirstCake, indexOfLastCake)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <Container>
            <Row>
                <div className="h2a"> {header} </div>
            </Row>
            <br /><br />
            <Row>
                {showcakes}
            </Row>
            <br />
            <Row>
                <Col></Col>
                <Col className="d-flex justify-content-center">
                <Pagination currentPage={currentPage} cakesPerPage={cakesPerPage} totalCakes={totalCakes} paginate={paginate}></Pagination>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}