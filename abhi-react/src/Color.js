import React from 'react'
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
function Color() {
  const [color, setColor] = useState("");
  const [icolor, setIColor] = useState("");
  const Colors = (e) => {
    setIColor(e.target.value);
  }
  const In = ()=>{
    setColor(icolor);
  }
  return (
    <div>
      <div className='container mt-5' style={{ backgroundColor: color, width: '200px', height: '150px', border: '2px solid blue' }}></div>
      <input type='text' value={icolor} onChange={Colors} placeholder='Enter Color Name:'/>
      <Button onClick={In}>Color</Button>
    </div>
  )
}

export default Color;
