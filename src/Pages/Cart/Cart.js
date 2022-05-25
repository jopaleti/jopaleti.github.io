import { Person, ShoppingCart } from '@material-ui/icons';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import './style.scss'
import {Col, Row, Container, Badge, Button} from 'react-bootstrap';
import {Cart} from '../../Components/Context/Context';
import {Link} from 'react-router-dom'

function CartPage() {
    const {cart, setCart, handleChange} = useContext(Cart);
    console.log(useContext(Cart));
    
    const [total, setTotal] = useState();
    // for Setting the price
    const [price, setPrice] = useState(0);

    // handlePrice function
    const handlePrice = () => {
      let ans = 0;
      cart.map(item=>(ans += item.qty*item.price));
      setPrice(ans);
    }
    
    useEffect(()=> {
        handlePrice()
    }, [cart])
  return (
    <div>
        <div className='navBar mb-3'>
          <Container>
              <div className="d-flex justify-content-between align-items-center">
                <span className='span'><Link to='/' className='navItem'><h3>Drone<span className='text-danger'>Tech</span></h3></Link></span>
                <span className='span'><a className='navItem' href='#'><Person /> Account</a></span>
                <span className='span'><a className='navItem' href='#'><Badge className=''><ShoppingCart />{cart ? parseInt(cart.length) : 0}</Badge> </a></span>
              </div>
          </Container>
        </div>
        <Container>
          <h3 className='fw-bold'>Your Cart</h3>
          {cart.length > 0 ?
            <div>
                 <h6 className='text-primary fw-bold'>Total Price: #{price}</h6>
                <Row className="g-2">
                    {cart.map(img => (
                    <Col lg='3' key={img.id}>
                        <img src={img.src} className='w-100 image' style={{height: '150px'}} alt="" />
                        <div className="imageDesc">
                        <a href="#" className='text-decoration-none text-dark'>
                            <h6>{img.name}</h6>
                        </a>
                        <h6>#{img.price}</h6>
                        <Button className='bg-dark d-inline' onClick={()=> handleChange(img, 1)}>+</Button>
                        <Button className='bg-light mx-2 text-dark text-center' style={{width: '50px'}}>{img.qty}</Button>
                        <Button className='bg-dark d-inline' onClick={()=> handleChange(img, -1)}>-</Button>
                        </div>
                    </Col>
                    ))}
                </Row> 
            </div>
         : <h5 className=''>Please Add Product to Your Cart...</h5>
          }
          {/* <Button onClick={() => setCart(del(cart))}>Clear All</Button> */}
        </Container>
    </div>
  )
}

export default CartPage