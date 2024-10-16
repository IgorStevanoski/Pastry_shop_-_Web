import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';

export default function WorkerWelcome() {

    const navigator = useNavigate()

    return (
        <Container>
            <Row>
                <div className='h2a'>Zaposleni</div>
            </Row>
            <br />
            <Row>
                <Col>
                    <br />
                    <Button name={"Novi proizvod"} clickFunction={() => navigator("/workerNewProduct")}></Button>
                    <br />
                    <br />
                    <Button name={"Narudžbine"} clickFunction={() => navigator("/workerOrders")}></Button>
                    <br />
                    <br />
                    <Button name={"Nalog"} clickFunction={() => navigator("/workerAccount")}></Button>
                    <br />
                    <br />
                </Col>
            </Row>
        </Container>



    )
}