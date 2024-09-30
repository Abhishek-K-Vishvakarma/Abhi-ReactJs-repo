import React from 'react'
import { useState } from 'react';
import {Button} from 'react-bootstrap';
function HandleForm() {
  const [name, setName] = useState(false);
  const [select, setSelect] = useState(false);
  const [tnc, setTnc] = useState(false);
  const FormHandle = (e)=>{
    e.preventDefault();
    console.log(name, select, tnc);
  }
  return (
    <div>
      <form className='container card' style={{width: '20rem'}} onSubmit={FormHandle}>
        <input type='text' placeholder='Enter Text:' onChange={(e)=> setName(e.target.value)}/><br/><br/>
        <select onChange={(e)=>setSelect(e.target.value)}>
          <option>Option</option>
          <option>Spider-Man</option>
          <option>Captan-America</option>
          <option>Iron-Man</option>
        </select><br/><br/>
        <input type='checkbox' onChange={(e) => setTnc(e.target.checked)} /><span>Term & Condition Policy</span><br /><br />
        <Button type='submit' variant='success'>Submit</Button>
     </form> 
    </div>
  )
}

export default HandleForm;
