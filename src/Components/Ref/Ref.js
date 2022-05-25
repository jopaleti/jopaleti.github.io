import React, { useState, useRef } from 'react';
import './styles.scss';

function Ref() {
    const [myNum, setMyNum] = useState(0);
    // useRef
    const inputOne = useRef()

    const getNumBox = () => {
        console.log(myNum)
        console.log('hello')
        console.log(inputOne.current);
        inputOne.current.style.width = '100%';
    }
    const getText = () => {
        console.log('Bye')
    }

  return (
    <>
        <h2>Learn Coding Online</h2>
        <input 
        ref={inputOne}
        type="number" 
        value={myNum}
        onChange={(e)=>setMyNum(e.target.value)}
        />
        <h3>Value is: {myNum} </h3>
        <button onClick={()=>getNumBox()}>Naira</button>
        <button onClick={()=>getText()}>Dollar</button>
    </>
  )
}

export default Ref