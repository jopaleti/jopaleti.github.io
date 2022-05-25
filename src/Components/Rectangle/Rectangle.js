import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';
import d1 from '../../Assets/Images/d19.jpg';
import d2 from '../../Assets/Images/d4.jpg';
import d3 from '../../Assets/Images/d9.jpg';
import d4 from '../../Assets/Images/d18.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

function Rectangle() {
  return (
    <Container className='rect'>
        <h4>Latest Offers</h4>
            <Row className='g-2 align-items-center'>
                <Col xs='6' md='3'>
                    <img src={d1} alt="" className="rectImage animate__animated w-100" />
                    <div className="mt-3">
                        <h6 className=" mb-1 rectName">Dji 2022 version</h6>
                        <a href="#" className="text-decoration-none fw-bold">#650</a>
                    </div>
                </Col>
                <Col xs='6' md='3'>
                    <img src={d2} alt="" className="rectImage w-100" />
                    <div className="mt-3">
                        <h6 className=" mb-1 rectName">Dji 2022 version</h6>
                        <a href="#" className="text-decoration-none fw-bold">#650</a>
                    </div>
                </Col>
                <Col xs='6' md='3'>
                    <img src={d3} alt="" className="rectImage w-100" />
                    <div className="mt-3">
                        <h6 className=" mb-1 rectName">Dji 2022 version</h6>
                        <a href="#" className="text-decoration-none fw-bold">#650</a>
                    </div>
                </Col>
                <Col xs='6' md='3'>
                    <img src={d4} alt="" className="rectImage w-100" />
                    <div className="mt-3">
                        <h6 className=" mb-1 rectName">Dji 2022 version</h6>
                        <a href="#" className="text-decoration-none fw-bold">#650</a>
                    </div>
                </Col>
            </Row>
    </Container>
  )
}

export default Rectangle