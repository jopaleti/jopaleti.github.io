import React from 'react';
import './style.scss';
import Input from '../Input/Input';
import Submitbtn from '../Submitbtn/Submitbtn';
import External from '../External/External';

function Login() {
  return (
    <div className='main'>
        <div className="login bg-light">
            <div className="header mt-4">
                <h2 className="fw-bold">
                    Drone<span className='text-danger'>Tech</span>
                </h2>
                <small className='login__desc'>Register with Us and get unlimited offers...</small>
            </div>
            <div className="input__field w-100 mt-4">
                <Input name='Your Name...' />
                <Input name='Your Password...' />
                <Input name='Confirm Password...' />
                <Submitbtn />
            </div>
            <div className="external__login">
                <External />
            </div>
        </div>
    </div>
  )
}

export default Login