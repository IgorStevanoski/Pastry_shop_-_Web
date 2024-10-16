import { useState } from "react"
import alertify from "alertifyjs"
import 'alertifyjs/build/css/alertify.css'
import { Link } from "react-router-dom";
import { UserType } from "../../App";
import '../../App.css'
import { Button } from "../../components/Button";

export default function Register() {

    const [newUser, setNewUser] = useState(
        { username: "", password: "", firstname: "", lastname: "", phoneNumber: "", address: "", basket: [], messages: [], type: UserType.User }
    );

    function register() {
        let users = []
        let nes = 0;
        if (localStorage.getItem("users") != null) {
            users = JSON.parse(localStorage.getItem("users"))
        }
        if (newUser.firstname == "" ||
            newUser.lastname == "" ||
            newUser.username == "" ||
            newUser.password == "" ||
            newUser.phoneNumber == "" ||
            newUser.address == "") {
            alertify.error("Popunite sva polja!")
        } else {
            users.forEach(u => {
                console.log(u.username)
                if (u.username == newUser.username) {
                    nes = 1;
                }
            });
            if (nes == 1) {
                alertify.error("Korisnik sa datim korisničkim imenom već postoji!")
            } else {
                users.push(newUser)
                localStorage.setItem("users", JSON.stringify(users));
                alertify.success("Korisnik uspešno registrovan.")
            }
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <h2 className="h2a">Registracija</h2>
                    <br />
                    <div>
                        <div className="h4b">Ime</div>
                        <input type='text' onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })} className="text_input" placeholder=""></input>
                    </div>
                    <br />
                    <div>
                        <div className="h4b">Prezime</div>
                        <input type='text' onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })} className="text_input" placeholder=""></input>
                    </div>
                    <br />
                    <div>
                        <div className="h4b">Telefon</div>
                        <input type='text' onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })} className="text_input" placeholder=""></input>
                    </div>
                    <br />
                    <div>
                        <div className="h4b">Adresa</div>
                        <input type='text' onChange={(e) => setNewUser({ ...newUser, address: e.target.value })} className="text_input" placeholder=""></input>
                    </div>
                    <br />
                    <div>
                        <div className="h4b">Korisničko ime</div>
                        <input type='text' onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} className="text_input" placeholder=""></input>
                    </div>
                    <br />
                    <div>
                        <div className="h4b">Lozinka</div>
                        <input type='text' onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} className="text_input" placeholder=""></input>
                    </div>
                    <br /><br />
                    <Button name={"Unesite"} clickFunction={() => register()}></Button>
                    <br /><br /><br />
                    <h4 className="h4b">Imate nalog? <Link to='/login' className="link"> Prijavite se ovde.</Link></h4>
                    <br /><br /><br />
                </div>
            </div>
        </div>
    )
}