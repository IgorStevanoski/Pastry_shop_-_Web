import { useEffect, useState } from "react"
import 'alertifyjs/build/css/alertify.css'
import { Link, useNavigate } from "react-router-dom";
import { UserType } from "../App";
import { Button } from "../components/Button";
import Logo from "../components/Logo";
import "./Base.css"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Base({ element, type }) {

    const navigator = useNavigate()
    function logout() {
        localStorage.setItem("logged", null)
        navigator("/")
    }

    function show() {
        switch (type) {
            case UserType.None:
                return <div>
                    <Logo src='/'></Logo>
                    <div className="elem">{element}</div>
                </div>
            case UserType.User:
                return <div>
                    <Logo src='/userPromotions'></Logo>
                    <div className="bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <Link to='/userProducts' className="link">
                                        <h3>Proizvodi</h3>
                                    </Link>
                                </div>
                                <div className="col-sm">
                                    <Link to='/userContact' className="link">
                                        <h3>Kontakt</h3>
                                    </Link>
                                </div>
                                <div className="col-sm"></div>
                                <div className="col-sm"></div>
                                <div className="col-sm">
                                    <Link to='/userBasket' className="link">
                                        <h3>Korpa</h3>
                                    </Link>
                                </div>
                                <div className="col-sm">
                                    <Link to='/userAccount' className="link">
                                        <h3>Nalog</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bar2">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm"></div>
                                <div className="col-sm h4b" style={{ textAlign: "right" }}>
                                    Korisnik: {(JSON.parse(localStorage.getItem("logged"))).firstname + " "}
                                    {(JSON.parse(localStorage.getItem("logged"))).lastname}
                                    {" "}
                                    <Link to='/userMail'>
                                        <img src="images/obavestenja.png" style={{ width: "40px" }} />
                                    </Link>
                                    <div>
                                        <Button name="Odjavite se" clickFunction={logout}></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elem">{element}</div>
                </div>
            case UserType.Worker:
                return <div>
                    <Logo src='/workerWelcome'></Logo>
                    <div className="barw">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <Link to='/workerNewProduct' className="link">
                                        <h3>Novi Proizvod</h3>
                                    </Link>
                                </div>
                                <div className="col-sm">
                                    <Link to='/workerOrders' className="link">
                                        <h3>Narudžbine</h3>
                                    </Link>
                                </div>
                                <div className="col-sm"></div>
                                <div className="col-sm"></div>
                                <div className="col-sm">
                                    
                                </div>
                                <div className="col-sm">
                                    <Link to='/workerAccount' className="link">
                                        <h3>Nalog</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bar2">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm"></div>
                                <div className="col-sm h4b" style={{ textAlign: "right" }}>
                                    Korisnik: {(JSON.parse(localStorage.getItem("logged"))).firstname + " "}
                                    {(JSON.parse(localStorage.getItem("logged"))).lastname}
                                    <div>
                                        <Button name="Odjavite se" clickFunction={logout}></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elem">{element}</div>
                </div>
                return <div>
                    <Link to='/workerNewProduct'>
                        Novi Proizvod
                    </Link>
                    {" "}
                    <Link to='/workerOrders'>
                        Narudžbine
                    </Link>
                    <Logo src='/workerWelcome'></Logo>
                    {" "}
                    <Link to='/workerAccount'>
                        Nalog
                    </Link>
                    <div>Korisnik: {(JSON.parse(localStorage.getItem("logged"))).firstname + " "}
                        {(JSON.parse(localStorage.getItem("logged"))).lastname} </div>
                    <div><Button name="Odjavite se"
                        clickFunction={logout}></Button>
                    </div>
                    <br />
                    <div className="elem">{element}</div>
                </div>
        }
    }

    return (
        show()
    )
}