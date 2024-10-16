import { useState } from "react"
import { Carousel } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

export default function UserProducts() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="h2a">Torte:</div>
                    <Link to='/userCakes'>
                        <img className="image"
                            src='/images/torte.png' style={{ width: "600px" }}>
                        </img>
                    </Link>
                </div>
                <div className="col-6">
                    <div className="h2a">Kolači:</div>
                    <Link to='/userCookies'>
                        <img className="image"
                            src='/images/Kolaci.png' style={{ width: "600px" }}>
                        </img>
                    </Link>
                </div>
            </div>
        </div>
    )
}