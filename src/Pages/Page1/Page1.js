import React from 'react';
import CarouselPage from '../../Components/Carousel/CarouselPage';
import Navbar from '../../Components/Navbar/Navbar';
import Rectangle from '../../Components/Rectangle/Rectangle';
import Rounded from '../../Components/Rounded/Rounded';
import Slide from '../../Components/Slide/Slide';
import {Container} from 'react-bootstrap';
import './style.scss';
import Stacked from '../../Components/Stacked/Stacked';
import Sleak from '../../Components/Sleak/Sleak';

function Page1() {
  return (
    <div className='page1'>
        <div className="navbar bg-light">
            <Navbar />
        </div>
        <div className="carousel mb-4 bg-light">
            <CarouselPage />
        </div>
        <div className="rounding mb-4 ">
            <Container>
                <Rounded />
            </Container>
        </div>
        <div className="stack">
            <Container>
                <Stacked />
            </Container>
        </div>
        <div className="sleaking my-3">
            <Sleak />
        </div>
        <div className="rect bg-light py-3">
            <Rectangle />
        </div>
        <div className="sliding my-3">
            <Container>
                <h4 className="fw-bold">
                    Trending Items
                </h4>
                <Slide />
            </Container>
        </div>
    </div>
  )
}

export default Page1