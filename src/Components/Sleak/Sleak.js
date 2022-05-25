import React from 'react';
import './style.scss';
import {Container } from 'react-bootstrap';
import eyowo from '../../Assets/Images/eyowo.png';
import eyowo2 from '../../Assets/Images/eyowo2.png';
import eyowo1 from '../../Assets/Images/eyowo1.png';
import eyowo3 from '../../Assets/Images/eyowo3.png';

const Sleak = () => {
  return (
    <div>
        <Container>
            <div className="sleak">
                <div className="sleak__item">
                    <img src={eyowo} alt="" className='w-100 h-100' />
                </div>
            
                <div className="sleak__item">
                    <img src={eyowo3} alt="" className='w-100 h-100' />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Sleak