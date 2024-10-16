import { useEffect, useState } from "react"
import alertify from "alertifyjs"
import 'alertifyjs/build/css/alertify.css'
import { Link, useNavigate } from "react-router-dom";
import { UserType } from "../../App";
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../../components/Button";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const navigator = useNavigate()

    function login() {
        if (localStorage.getItem("users") == null) {
            alertify.error("Korisnik ne postoji!")
        }
        else {
            let users = JSON.parse(localStorage.getItem("users"));
            let found = false;
            for (let i = 0; i < users.length; i++) {
                if (users[i].username == username && users[i].password == password) {
                    found = true;
                    localStorage.setItem("logged", JSON.stringify(users[i]))
                    if (users[i].type == UserType.User)
                        navigator("/userPromotions")
                    else
                        navigator("/workerWelcome")
                    //alertify.success("Good data")
                }
            }
            if (!found) alertify.error("Korisnik ne postoji!")

        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <h2 className="h2a">Prijavite se:</h2>
                    <br />
                    <div className="h4b">Korisničko ime</div>
                    <input type='text' onChange={(e) => setUsername(e.target.value)} className="text_input" placeholder=""></input>
                    <br /><br />
                    <div className="h4b">Lozinka</div>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} className="text_input" placeholder=""></input>
                    <br /><br /><br />
                    <Button name={"Unesite"} clickFunction={() => login()}></Button>
                    <br /><br /><br />
                    <h4 className="h4b">Nemate nalog? <Link to='/register' className="link"> Registrujte se ovde.</Link></h4>
                </div>
            </div>
        </div>
    )
}