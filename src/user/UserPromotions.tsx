import { useState } from "react"
import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import './User.css'
import CarouselButton from "./carouselItems/CarouselButton";

export default function UserPromotions() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="h2a promocijeAllign">
                    Promocije:
                </div>
            </div>
            <div className="row justify-content-center">
                <Carousel
                    prevIcon={<CarouselButton direction={true}></CarouselButton>}
                    nextIcon={<CarouselButton direction={false}></CarouselButton>}
                    indicators={true}
                    interval={3000}>
                    <Carousel.Item>
                        <img className="img_carousel" src="/images/promocija1.png"></img>
                        <Carousel.Caption>
                            <div className="h3a">Torta1 & Kolač1</div>
                            <p className="h4a">1500.00</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="img_carousel" src="/images/promocija2.png"></img>
                        <Carousel.Caption>
                            <div className="h3a">2 + 1 Kolač</div>
                            <p className="h4a">.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="img_carousel" src="/images/promocija3.png"></img>
                        <Carousel.Caption>
                            <div className="h3a">2 Torte</div>
                            <p className="h4a">
                                2000.00
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}