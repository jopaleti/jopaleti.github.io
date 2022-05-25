import React from 'react';
import './style.scss';

function External() {
  return (
    <div>
        <div className="or__section mt-3">
            <p className='para me-3'></p>
            <p className='or'>Or continue with</p>
            <p className='para ms-3'></p>
        </div>
        <div className="mb-1 auth__icons d-flex align-items-center gap-3 justify-content-center">
            <a className='text-decoration-none px-4 rounded px-1 bg-primary'>
                <h5 style={{color: 'green'}}>G</h5>
            </a>
            <a className='text-decoration-none px-4 rounded px-1 bg-primary'>
                <h5 style={{color: 'green'}}>G</h5>
            </a>
            <a className='text-decoration-none px-4 rounded px-1 bg-primary'>
                <h5 style={{color: 'green'}}>G</h5>
            </a>
        </div>
        <small className='text-center text-dark login__footer'>Already Have an Account? <a href="#" className="text-decoration-none">Login</a></small>
    </div>
  )
}

export default External