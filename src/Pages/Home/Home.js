import { Person, ShoppingCart } from '@material-ui/icons';
import React, {createContext, useContext, useEffect, useState} from 'react';
import './style.scss'
import {Col, Row, Container, Badge, Button} from 'react-bootstrap';
import d1 from '../../Assets/Images/d1.png';
import d2 from '../../Assets/Images/d2.jpg';
import d3 from '../../Assets/Images/d3.jpg';
import d4 from '../../Assets/Images/d4.jpg';
import d5 from '../../Assets/Images/d5.jpg';
import d6 from '../../Assets/Images/d6.jpg';
import d7 from '../../Assets/Images/d7.jpg';
import d8 from '../../Assets/Images/d8.jpg';
import d9 from '../../Assets/Images/d9.jpg';
import d10 from '../../Assets/Images/d10.webp';
import {Cart} from '../../Components/Context/Context';
import {Link} from 'react-router-dom';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';



const images = [
  {
    id: 1,
    qty: 1,
    src: d1,
    name: 'dji automatic drone',
    price: '35000'
  },
  {
    id: 2,
    qty: 1,
    src: d2,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 3,
    qty: 1,
    src: d3,
    name: 'dji automatic drone',
    price: '35000'
  },
  {
    id: 4,
    qty: 1,
    src: d4,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 5,
    qty: 1,
    src: d2,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 6,
    qty: 1,
    src: d3,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 7,
    qty: 1,
    src: d4,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 8,
    qty: 1,
    src: d5,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 9,
    qty: 1,
    src: d6,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 10,
    qty: 1,
    src: d7,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 11,
    qty: 1,
    src: d8,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 12,
    qty: 1,
    src: d9,
    name: 'dji automatic drone',
    price: '40000'
  },
  {
    id: 13,
    qty: 1,
    src: d10,
    name: 'dji automatic drone',
    price: '40000'
  }
]


function Home() {
  
  const {cart, setCart, dispatch, age} = useContext(Cart);
  console.log(useContext(Cart));
  return (
    <div>
        <div className='navBar mb-3'>
          <Container>
              <div className="d-flex justify-content-between align-items-center">
                <span className='span'><Link to='/' className='navItem'><h3>Drone<span className='text-danger'>Tech</span></h3></Link></span>
                <span className='span'><a className='navItem' href='#'><Person /> Account</a></span>
                <span className='span'><Link to='/cart' className='navItem' ><Badge className=''><ShoppingCart />{cart ? parseInt(cart.length) : 0}</Badge> </Link></span>
              </div>
          </Container>
        </div>
        <Container>
          <h5 className='fw-bold'>Shopping</h5>
          <Button className='bg-dark text-light' onClick={()=>dispatch({type: 'inc'})}>+</Button>
          <Button className='bg-light text-dark'>{age}</Button>
          <Button className='bg-dark text-light' onClick={()=>dispatch({type: 'dec'})}>-</Button>
          <Row className="g-2">
            {images.map(img => (
              <Col lg='3' key={img.id} className='bounce'>
                <img src={img.src} className='w-100 image' style={{height: '150px'}} alt="" />
                <div className="imageDesc">
                  <a href="#" className='text-decoration-none text-dark'>
                    <h6>{img.name}</h6>
                  </a>
                  <h6>#{img.price}</h6>
                  {cart.includes(img) ? <Button onClick={()=>{setCart(cart.filter((c) => c.id !== img.id)); console.log(cart)}}>Remove</Button> 
                  :<Button onClick={()=>{setCart([...cart, img]); console.log(cart)}}>Add to Cart</Button>
                   }
                </div>
              </Col>
            ))}
            {/* <img src={d1} alt="" /> */}
          </Row>
          <div style={{overflow: 'hidden'}}>
            <AnimationOnScroll animateIn="animate__fadeInUp" className='src'>
              <div className="d-flex" style={{height: '400px', width: '100%'}}>
                <img src={d3} className='h-100 w-100 img-fluid'style={{objectFit: 'cover', objectPosition: 'center'}} alt="" />
              </div>
            </AnimationOnScroll>
          </div>
        </Container>
    </div>
  )
}

export default Home