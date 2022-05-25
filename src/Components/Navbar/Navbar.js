import { Menu, MenuItem } from '@material-ui/core';
import { ArrowDownward, PhoneBluetoothSpeaker, Share, ShoppingCart } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import {Container, Row, Col, Badge} from 'react-bootstrap';
import './style.scss'

function Navbar() {
  return (
 
        <Container>
            <div className="navContent d-flex justify-content-between align-items-center w-100">
                <div><a href="#" className="text-decoration-none text-dark"><h2 className="fw-bold p-3 nav-Brand">Drone<span className='text-danger'>Tech</span></h2></a></div>
                <div className="form-container p-3">
                    <form action="#" className='w-100'>
                        <input list='categories' name='category' id='category' placeholder='search product...' className='w-100 py-2 px-4 rounded-pill border-light border-0'/>
                        <datalist id='categories'>
                            <option value="Edge"/>
                            <option value="Firefox"/>
                            <option value="Chrome"/>
                            <option value="Opera"/>
                            <option value="Safari"/>
                        </datalist>
                    </form>
                </div>
                <div className='icon-cont d-inline-flex justify-content-between align-items-center'>
                    <h6 className='p-3 ic1'><Share className='d-block'/><>Compare</> </h6>
                    <h6 className='p-3 ic2 cart'><ShoppingCart/><Badge>0</Badge><br /> <>Cart</> </h6>
                    <h6 className='menuBar p-3'><a href="#" className='text-decoration-none text-dark'><MenuIcon/></a></h6>
                    <h6 className='p-3'><ShoppingCart/><Badge>0</Badge><br /> <>Cart</> </h6>
                </div>
            </div>
            {/* 469px second navbar */}
            <div className="secondNav">
                <div className='Form2-cont'>
                    <form action="#" className='w-100'>
                        <input list='categories' name='category' id='category' placeholder='search product...' className='w-100 py-2 px-4 rounded-pill border-light border-0'/>
                        <datalist id='categories'>
                            <option value="Edge"/>
                            <option value="Firefox"/>
                            <option value="Chrome"/>
                            <option value="Opera"/>
                            <option value="Safari"/>
                        </datalist>
                    </form>
                </div>
                <div className='ms-auto d-flex justify-content-between align-items-center'>
                    <a href="#" className='text-decoration-none text-dark'><h6 className="fw-bold p-2 log">Sign Up</h6></a>
                    <a href="#" className='text-decoration-none text-dark'><h6 className="fw-bold p-2 log">Login</h6></a>
                </div>
            </div>
            {/* Stop */}
            <div className="second_nav d-flex justify-content-between align-items-center w-100">
                <div className="d-flex align-items-center justify-content-between me-auto">
                    <h6 className='fw-bold p-3 nav-LinkMenu'>
                        <MenuIcon className='me-3 menu-Icon'/><small className='categText'>Browse Category</small> <ArrowDownward className='ms-lg-4 categIcon' style={{fontSize: '14px'}} />
                    </h6>
                    <h6 className="fw-bolg p-3 nav-Link"><a href='#' className='text-decoration-none text-dark'>Home</a></h6>
                    <h6 className="fw-bolg p-3 nav-Link"><a href='#' className='text-decoration-none text-dark'>Product</a></h6>
                    <h6 className="fw-bolg p-3 nav-Link"><a href='#' className='text-decoration-none text-dark'>Store</a></h6>
                    <h6 className="fw-bolg p-3 nav-Link"><a href='#' className='text-decoration-none text-dark'>Blog</a></h6>
                </div>
                <div className='d-flex justify-content-between align-items-center Sign-login'>
                    <a href="#" className='text-decoration-none text-dark'><h6 className="fw-bold p-3">Sign Up</h6></a>
                    <a href="#" className='text-decoration-none text-dark'><h6 className="fw-bold p-3">Login</h6></a>
                </div>
            </div>
        </Container>

  )
}

export default Navbar;