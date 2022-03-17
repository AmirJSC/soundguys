import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import Button from '../Button/Button';

export default function CarouselSection() {
    return (
        <Carousel variant="light" controls={false} fade>
            <Carousel.Item className="carouselFit" interval={1500}>
                <img
                    className="d-block w-100 carouselImg"
                    src={require('../../assets/images/imgCarousel1.jpg')}
                    alt="First slide"
                />
                <div className="overlay">
                    <h1>Active Noise-Cancelling True Wireless Earphones</h1>
                    <h5>Deep Focus</h5>
                    <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'
                    >
                        ORDER NOW
                    </Button>
                </div>
            </Carousel.Item>            
            <Carousel.Item className="carouselFit" interval={1500}>
                <img
                    className="d-block w-100 carouselImg"
                    src={require('../../assets/images/imgCarousel2.jpg')}
                    alt="First slide"
                />
                <div className="overlay">
                    <h1>Wireless Gaming Headphones</h1>
                    <h5>Never play the same</h5>
                    <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'
                    >
                        SHOP NOW
                    </Button>
                </div>
            </Carousel.Item>            
            <Carousel.Item className="carouselFit" interval={1500}>
                <img
                    className="d-block w-100 carouselImg"
                    src={require('../../assets/images/imgCarousel3.jpg')}
                    alt="First slide"
                />
                <div className="overlay">
                    <h1>Intelligent-Connect Speakers</h1>
                    <h5>Hear the future of AI</h5>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'
                    >
                        SHOP NOW
                    </Button>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}