import React from 'react'
import { useState , useContext} from 'react';
import {Globalcontext} from '../Context/Globalstate';


function Addtransaction() {
    
  const [text,settext] = useState('');
  const [amount,setamount] = useState(0);

  const {addTransaction} = useContext(Globalcontext);

  const onSubmit = e=>{
    e.preventDefault();

    const newTransaction ={
      id:Math.floor(Math.random() * 100000000000),
      text,
      amount:+amount
    }
    addTransaction(newTransaction);
  }

  return (

    <div>
        <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" 
          value={text}
          onChange={(e)=>settext(e.target.value)} 
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">amount <br />
            (negative - expense, positive - income)</label>
          <input type="number"  
          value={amount}
          onChange={(e)=>setamount(e.target.value)} 
          placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default Addtransaction