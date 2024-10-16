import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import '../../App.css'

export default function Welcome(){

    const navigator = useNavigate()

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <br/>
                    <h1 className="h1a">Dobrodošli!</h1> 
                    <br />
                    <br />
                    <Button name={"Prijavite se"} clickFunction={() => navigator('/login')}></Button>
                    <br/>
                    <br/>
                    <br/>
                    <h4 className="h4b">Nemate nalog? <Link to='/register' className="link"> Registrujte se ovde.</Link></h4>
                </div>
            </div>
        </div>
    )
}