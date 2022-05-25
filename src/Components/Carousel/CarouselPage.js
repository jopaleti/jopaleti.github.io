import React from 'react';
import './style.scss';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import d1 from '../../Assets/Images/d13.jpg';
import d2 from '../../Assets/Images/d16.jpg';
import d3 from '../../Assets/Images/d6.jpg';
import d4 from '../../Assets/Images/d3.jpg';
import d5 from '../../Assets/Images/d22.jpg';

function CarouselPage() {
  return (
    <Container>
        <Row className='justify-content-between align-item-center gy-2 gy-lg-0 caRow'>
            <Col md='12' lg='8' className='h-100 carItem1'>
                <Carousel className='w-100 h-100'>
                    <Carousel.Item className='carItem'>
                        <img
                        className="d-block w-100 h-100 carImg"
                        src={d1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carItem'>
                        <img
                        className="d-block h-100 w-100 carImg"
                        src={d5}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carItem'>
                        <img
                        className="d-block h-100 w-100 carImg"
                        src={d3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col md='12' lg='4' className='h-100 carItem2 '>
                <Row md='2' lg='1' className='w-100 h-100 justify-content-between alignCart m-auto'>
                    <Col className='bg-white leftCar'>
                        <Row className='justify-content-between align-item-center h-100'>
                            <Col xs='5' sm='5' md='5'>
                                <div className='d-flex flex-column align-items-center justify-content-center h-100 gap-3 gap-sm-3 gap-lg-5 gap-md-4 pt-3'>
                                    <h4 className='fw-bold explore'>Explore Our store</h4>
                                    <div>
                                        <small className='discount'>Discount Sales</small>
                                        <h4 className='fw-bold text-danger price'>$700</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xs='7' sm='7' md='7' className='h-100 pe-0 colImageCont'>
                                <img src={d4} alt="" className='w-100 h-100 colImage' />
                            </Col>
                        </Row>
                    </Col>
                    <Col className='bg-white leftCar'>
                    <Row className='justify-content-between align-item-center h-100'>
                            <Col xs='5' sm='5' md='5'>
                                <div className='d-flex flex-column align-items-center justify-content-center h-100 gap-3 gap-sm-3 gap-lg-5 gap-md-4 pt-3'>
                                    <h4 className='fw-bold explore'>Explore Our store</h4>
                                    <div>
                                        <small className='discount'>Discount Sales</small>
                                        <h4 className='fw-bold text-danger price'>$700</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xs='7' sm='7' md='7' className='h-100 pe-0 colImageCont'>
                                <img src={d2} alt="" className='w-100 h-100 colImage' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default CarouselPage