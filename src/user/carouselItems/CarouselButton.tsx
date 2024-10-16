import './Carousel.css'

export default function CarouselButton({direction}) {
    
    if (direction) return (<img src='images/dugmedesno.png' className='triangleleft'></img>)
    return (
        <img src='images/dugmedesno.png' className='triangleright'></img>
    )
}