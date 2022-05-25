import React from 'react';
import './style.scss';
import {Container} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import d1 from '../../Assets/Images/d6.jpg';
import d2 from '../../Assets/Images/d20.jpg';
import d3 from '../../Assets/Images/d11.webp';
import d4 from '../../Assets/Images/d14.jpg';
import d5 from '../../Assets/Images/d8.jpg';
import { Star } from '@material-ui/icons';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 990 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 991, min: 520 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    medium: {
        breakpoint: { max: 521, min: 300 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    //   slidesToSlide: 1 // optional, default to 1.
    // }
};

function Slide() {
  return (
    <div className='slideCont'>
        <Carousel responsive={responsive}>
            <div className='flex-roundX'>
                <a href="#"><img src={d1} className='textImg animate__animated rowImgX w-100' alt="" /></a>
                <div className="slide-bottom my-1 px-2">
                    <div className="slideText">
                        <a href="#" className="text-decoration-none">
                            <small className='text-dark'>Dji for research</small>
                            <p className='slideP'>Lorem ipsum dolor sit amet.</p>
                        </a>
                    </div>
                    <Star className='text-danger me-1' />
                    <Star className='text-danger me-1' />
                    <Star className='text-danger' />
                    <h6 className="fw-bold mt-1">
                        <a href="#" className="text-decoration-none text-dark">#35000</a>
                    </h6>
                </div>
            </div>
            <div className='flex-roundX'>
                <a href="#"><img src={d2} className='textImg rowImgX w-100' alt="" /></a>
                <div className="slide-bottom my-1 px-2">
                    <div className="slideText">
                        <a href="#" className="text-decoration-none">
                            <small className='text-dark'>Dji for research</small>
                            <p className='slideP'>Lorem ipsum dolor sit amet.</p>
                        </a>
                    </div>
                    <Star className='text-danger me-1' />
                    <Star className='text-danger me-1' />
                    <Star className='text-danger' />
                    <h6 className="fw-bold mt-1">
                        <a href="#" className="text-decoration-none text-dark">#35000</a>
                    </h6>
                </div>
            </div>
            <div className='flex-roundX'>
                <a href="#"><img src={d3} className='textImg rowImgX w-100' alt="" /></a>
                <div className="slide-bottom my-1 px-2">
                    <div className="slideText">
                        <a href="#" className="text-decoration-none">
                            <small className='text-dark'>Dji for research</small>
                            <p className='slideP'>Lorem ipsum dolor sit amet.</p>
                        </a>
                    </div>
                    <Star className='text-danger me-1' />
                    <Star className='text-danger me-1' />
                    <Star className='text-danger' />
                    <h6 className="fw-bold mt-1">
                        <a href="#" className="text-decoration-none text-dark">#35000</a>
                    </h6>
                </div>
            </div>
            <div className='flex-roundX'>
                <a href="#"><img src={d4} className='textImg rowImgX w-100' alt="" /></a>
                <div className="slide-bottom my-1 px-2">
                    <div className="slideText">
                        <a href="#" className="text-decoration-none">
                            <small className='text-dark'>Dji for research</small>
                            <p className='slideP'>Lorem ipsum dolor sit amet.</p>
                        </a>
                    </div>
                    <Star className='text-danger me-1' />
                    <Star className='text-danger me-1' />
                    <Star className='text-danger' />
                    <h6 className="fw-bold mt-1">
                        <a href="#" className="text-decoration-none text-dark">#35000</a>
                    </h6>
                </div>
            </div>
            <div className='flex-roundX'>
                <a href="#"><img src={d5} className='textImg rowImgX w-100' alt="" /></a>
                <div className="slide-bottom my-1 px-2">
                    <div className="slideText">
                        <a href="#" className="text-decoration-none">
                            <small className='text-dark'>Dji for research</small>
                            <p className='slideP'>Lorem ipsum dolor sit amet.</p>
                        </a>
                    </div>
                    <Star className='text-danger me-1' />
                    <Star className='text-danger me-1' />
                    <Star className='text-danger' />
                    <h6 className="fw-bold mt-1">
                        <a href="#" className="text-decoration-none text-dark">#35000</a>
                    </h6>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default Slide