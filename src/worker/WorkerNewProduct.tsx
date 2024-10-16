import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import DropDown from '../components/DropDown';
import { useState } from 'react';
import alertify from "alertifyjs"
import 'alertifyjs/build/css/alertify.css'
import { Col, Container, Row } from 'react-bootstrap';

export default function WorkerNewProduct() {

    const [name, setName] = useState("")
    const [type, setType] = useState("Torta")
    const [descr, setDescr] = useState("")
    const [price, setPrice] = useState(0)
    const [comp, setComp] = useState("")

    const [src, setSrc] = useState("/images/placeholder.png")
    const images = ["/images/kolac1.png",
        "/images/kolac2.png",
        "/images/kolac3.png",
        "/images/torta1.png",
        "/images/torta2.png",
        "/images/torta3.png"]

    const [showimages, setShowimages] = useState([])

    const types = ["Torta", "Kolač", "Promocija"]
    const enum Field {
        Name, Descr, Price, Comp
    }

    function updateField(field, value) {
        switch (field) {
            case Field.Name: setName(value); break;
            case Field.Descr: setDescr(value); break;
            case Field.Price: setPrice(value); break;
            case Field.Comp: setComp(value); break;
        }
    }

    function chooseImage(image) {
        setSrc(image)
        setShowimages([])
    }

    function showAllImages() {
        if (showimages.length == 0) {
            setShowimages(images.map(image => {
                return (
                    <img onClick={() => chooseImage(image)}
                        src={image} style={{ width: "150px" }}>
                    </img>
                )
            }))
        } else {
            setShowimages([])
        }
    }

    function addProduct() {
        let productId = JSON.parse(localStorage.getItem("productId"))
        localStorage.setItem("productId", JSON.stringify(productId + 1))

        const comments = []

        let products = JSON.parse(localStorage.getItem("products"))
        let testproducts = []
        testproducts = products.filter(product => product.name == name)
        console.log(testproducts.length)

        if (testproducts.length != 0) {
            alertify.error("Proizvod sa datim nazivom već postoji!")
        } else if (isNaN(price) || price <= 0) {
            alertify.error("Unesite validne vrednosti!")
        } else if (name == "" || descr == "" || comp == "") {
            alertify.error("Popunite sva polja!")
        } else {
            const product = {
                id: productId, type: type, name: name, description: descr,
                price: price, composition: comp, image: src, comments: comments
            }
            products.push(product)
            localStorage.setItem("products", JSON.stringify(products))

            alertify.success("Proizvod uspešno dodat!")
        }
    }

    return (
        <Container>
            <Row>
                <div className='h2a'>Novi Proizvod</div>
            </Row>
            <Row>
                <Col>
                    <div className='h3b' style={{ padding: "1.5%" }}>Tip:</div>
                    <DropDown types={types} setType={setType}></DropDown>
                    <br />
                    <div className='h3b' style={{ padding: "1.5%" }}>Naziv:</div>
                    <input type='text' onChange={(e) => updateField(Field.Name, e.target.value)} className="text_input" style={{ width: "500px" }}></input>
                    <div className='h3b' style={{ padding: "1.5%" }}>Opis:</div>
                    <textarea rows={3} onChange={(e) => updateField(Field.Descr, e.target.value)} className="textarea_input" style={{ width: "500px" }}></textarea>
                    <div className='h3b' style={{ padding: "1.5%" }}>Cena:</div>
                    <input type='text' onChange={(e) => updateField(Field.Price, e.target.value)} className="text_input" style={{ width: "500px" }}></input>
                    <div className='h3b' style={{ padding: "1.5%" }}>Sastav:</div>
                    <textarea rows={3} onChange={(e) => updateField(Field.Comp, e.target.value)} className="textarea_input" style={{ width: "500px" }}></textarea>
                    <br />
                </Col>
                <Col>
                    <div>
                        <img className="image" onClick={() => showAllImages()}
                            src={src} style={{ width: "600px" }}>
                        </img>
                    </div>
                    {showimages}
                    <br />
                </Col>
            </Row>
            <Row>
                <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                    <Button name={"Dodajte Proizvod"} clickFunction={() => addProduct()}></Button>
                </div>
            </Row>
        </Container>
    )
}