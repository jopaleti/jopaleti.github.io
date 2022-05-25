import React from 'react';
import './style.scss';
import {Container, Col, Row} from 'react-bootstrap';
import d1 from '../../Assets/Images/d2.jpg';
import d2 from '../../Assets/Images/d10.webp';
import d3 from '../../Assets/Images/d6.jpg';
import d4 from '../../Assets/Images/d11.webp';
import d5 from '../../Assets/Images/d21.avif';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    tablet2: {
        breakpoint: { max: 991, min: 464 },
        items: 3
    },
    medium: {
        breakpoint: { max: 767, min: 464 },
        items: 3
    },
    medium2: {
        breakpoint: { max: 463, min: 445 },
        items: 4
    },
    medium3: {
        breakpoint: { max: 444, min: 300 },
        items: 3
    },
    // mobile: {
    //     breakpoint: { max: 379, min: 300 },
    //     items: 2
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1
    // }
  };
function Rounded() {
  return (
    <main className='round'>
        <h4 className='fw-bold'>Popular Brands</h4>
        <Carousel responsive={responsive}
            swipeable={true}
            draggable={true}
            keyBoardControl={true}
            customTransition="all 1.5"
            transitionDuration={500}
            className='Rounded'
        >
            <div className='flex-round'>
                <img src={d1} className='textImg rowImg' alt="" />
                <h6 className='text-center mt-2'>Dji</h6>
            </div>
            <div className='flex-round'>
                <img src={d2} className='textImg rowImg' alt="" />
                <h6 className='text-center mt-2'>Dji</h6>
            </div>
            <div className='flex-round'>
                <img src={d3} className='textImg rowImg' alt="" />
                <h6 className='text-center mt-2'>Dji</h6>
            </div>
            <div className='flex-round'>
                <img src={d4} className='textImg rowImg' alt="" />
                <h6 className='text-center mt-2'>Dji</h6>
            </div>
            <div className='flex-round'>
                <img src={d5} className='textImg rowImg' alt="" />
                <h6 className='text-center mt-2'>Dji</h6>
            </div>
            <div className='flex-round'>
                <img src={d1} className='textImg rowImg' alt="" />
                <h6 className='text-center mt-2'>Dji</h6>
            </div>
            <div className='flex-round'>
                <img src={d2} className='textImg rowImg' alt="" />
                <h6 className='text-center mt-2'>Dji</h6>
            </div>
        </Carousel>
    </main>
  )
}

export default Rounded