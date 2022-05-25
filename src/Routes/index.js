import React from "react";
// import { Router, Route } from 'react-router';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Form2, Hooks, Login} from '../Components';
import Home from "../Pages/Home/Home";
import CartPage from "../Pages/Cart/Cart";
import Page1 from '../Pages/Page1/Page1';


const routes = (
    <Router>
        <Routes>
            <Route exact path="/form" element={<Form2 />}/>
            {/* <Route exact path="/" element={<Hooks />}/> */}
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<CartPage />} />
            <Route exact path='/home' element={<Page1 />} />
            <Route exact path='/login' element={<Login />} />
        </Routes>
    </Router>
)

export default routes;