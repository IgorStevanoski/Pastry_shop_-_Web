import { useState } from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../components/Button";

export default function WorkerAccount() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("logged")))

    const enum Inputs {Username = 0, Firstname, Lastname, Phone, Address, Password}
    const [inputs, setInputs] = useState([null,null,null,null,null,null])

    const [tempFields, setTempFields] = useState([user.username, user.firstname, 
        user.lastname, user.phoneNumber, user.address, user.password])

    function updateTempField(index, value){
        let temp = [...tempFields]
        temp[index] = value
        console.log(temp[index])
        setTempFields(temp)
    }
    
    function updateField(index, value){
        if (value == "") return        
        let tempUser = user
        
        let users = JSON.parse(localStorage.getItem("users"))
        let i
        for (i = 0; i < users.length; i++) {
            if (users[i].username == tempUser.username){
                break;
            }
        }
        
        switch(index){
            case Inputs.Username:   users[i].username =     value; tempUser.username = value; break;
            case Inputs.Firstname:  users[i].firstname =    value; tempUser.firstname = value; break;
            case Inputs.Lastname:   users[i].lastname =     value; tempUser.lastname = value; break;
            case Inputs.Phone:      users[i].phoneNumber =  value; tempUser.phoneNumber = value; break;
            case Inputs.Address:    users[i].address =      value; tempUser.address = value; break;
            case Inputs.Password:   users[i].password =     value; tempUser.password = value; break;
        }

        setUser(tempUser)
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("logged", JSON.stringify(user));
    }

    function changeInput(index){
        let temp = [...inputs]
        if(temp[index] === null) {
            temp[index] = <input type='text' onChange={(e) => updateTempField(index, e.target.value)} className="text_input"
            placeholder={tempFields[index]}></input>
        } else {
            updateField(index, tempFields[index])
            temp[index] = null
        }
        setInputs(temp)
    }

    return (
        <Container>
            <Row>
                <div className="h2a">Nalog</div>
            </Row>
            <Row style={{ padding: "1.5%" }}>
                <Col></Col>
                <Col>
                    <div className="h3b">Korisnik:</div>
                </Col>
                <Col>
                    <div className="h3b">{user.username}</div>
                </Col>
                <Col></Col>
            </Row>
            <Row style={{ padding: "1.5%" }}>
                <Col></Col>
                <Col>
                    <div className="h3b">Ime:</div>
                </Col>
                <Col>
                    {inputs[Inputs.Firstname] === null ? <div className="h3b">{user.firstname}</div> : null}
                    {inputs[Inputs.Firstname]}
                </Col>
                <Col>
                    <Button name="Izmenite" clickFunction={() => changeInput(Inputs.Firstname)}></Button>
                </Col>
            </Row>
            <Row style={{ padding: "1.5%" }}>
                <Col></Col>
                <Col>
                    <div className="h3b">Prezime:</div>
                </Col>
                <Col>
                    {inputs[Inputs.Lastname] === null ? <div className="h3b">{user.lastname}</div> : null}
                    {inputs[Inputs.Lastname]}
                </Col>
                <Col>
                    <Button name="Izmenite" clickFunction={() => changeInput(Inputs.Lastname)}></Button>
                </Col>
            </Row>
            <Row style={{ padding: "1.5%" }}>
                <Col></Col>
                <Col>
                    <div className="h3b">Telefon:</div>
                </Col>
                <Col>
                    {inputs[Inputs.Phone] === null ? <div className="h3b">{user.phoneNumber}</div> : null}
                    {inputs[Inputs.Phone]}
                </Col>
                <Col>
                    <Button name="Izmenite" clickFunction={() => changeInput(Inputs.Phone)}></Button>
                </Col>
            </Row>
            <Row style={{ padding: "1.5%" }}>
                <Col></Col>
                <Col>
                    <div className="h3b">Adresa:</div>
                </Col>
                <Col>
                    {inputs[Inputs.Address] === null ? <div className="h3b">{user.address}</div> : null}
                    {inputs[Inputs.Address]}
                </Col>
                <Col>
                    <Button name="Izmenite" clickFunction={() => changeInput(Inputs.Address)}></Button>
                </Col>
            </Row>
            <Row style={{ padding: "1.5%" }}>
                <Col></Col>
                <Col>
                    <div className="h3b">Lozinka:</div>
                </Col>
                <Col>
                    {inputs[Inputs.Password] === null ? <div className="h3b">{user.password}</div> : null}
                    {inputs[Inputs.Password]}
                </Col>
                <Col>
                    <Button name="Izmenite" clickFunction={() => changeInput(Inputs.Password)}></Button>
                </Col>
            </Row>
        </Container>
    )
}