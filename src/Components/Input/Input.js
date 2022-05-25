import React from 'react';
import './style.scss';

function Input(props) {;
  return (
    <div className='mb-2'>
        <input type="text" name='name' className='w-100 input__form' placeholder={props.name} />
    </div>
  )
};

export default Input