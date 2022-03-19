import Button from '../Button/Button';
import { Container, Row, Col } from 'react-bootstrap';


export default function CarouselSection() {
    return (
        <div className="my-5">
            <Row>
                <Col xs={12} md={7} className="p-0">
                    <img
                        className="img-fluid"
                        src={require('../../assets/images/imgFeatured1.png')}
                        alt="First slide"
                    />
                </Col>
                <Col xs={12} md={5}>
                    <div className="d-flex flex-column align-items-center justify-content-center p-3 mt-xl-3">
                        <h4>Never Sound the Same</h4>
                        <p className="w-lg-75 gray">
                        Bose QuietComfort® Earbuds feature all the noise cancelling performance of the best over-ear headphones from Bose — from a compact, truly wireless earbud.
                        </p>
                        <Button
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={7} className="p-0 order-lg-2">
                    <img
                        className="img-fluid"
                        src={require('../../assets/images/imgFeatured2.png')}
                        alt="First slide"
                    />
                </Col>
                <Col xs={12} md={5}>
                    <div className="d-flex flex-column align-items-center justify-content-center p-3 mt-xl-3 order-lg-1">
                        <h4>The Future of Audio</h4>
                        <p className="w-lg-75 gray">
                        It’s not always easy to find a quiet place to take a call. The microphone system built into these earbuds is specially designed to pick up the sound of your voice — while it rejects most of the noise around you
                        </p>
                        <Button
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                    </div>
                </Col>
            </Row>            
            <Row>
                <Col xs={12} md={7} className="p-0">
                    <img
                        className="img-fluid"
                        src={require('../../assets/images/imgFeatured3.png')}
                        alt="First slide"
                    />
                </Col>
                <Col xs={12} md={5}>
                    <div className="d-flex flex-column align-items-center justify-content-center p-3 mt-xl-3">
                        <h4>Customized Control</h4>
                        <p className="w-lg-75 gray">
                            It’s not always easy to find a quiet place to take a call. The microphone system built into these earbuds is specially designed to pick up the sound of your voice — while it rejects most of the noise around you.
                        </p>
                        <Button
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}