import { Link } from "react-router-dom";
import "./Logo.css"

export default function Logo({src}) {

    return (
        <div >
            <div className="rectangleBG">

            </div>
            <div className="container">
                <Link to={src}>
                    <img className="logo"
                        src='/images/Slatki Zalogaji.png'>
                    </img>
                </Link>
            </div>
        </div>
    )

}