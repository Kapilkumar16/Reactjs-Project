import "./FormStyles.css";

import React from 'react'

function Form() {
  return (
    <div className="form ">
        <form >
            <label htmlFor="">Your Name</label>
            <input type="text"></input>
            <label htmlFor="">E-mail</label>
            <input type="email"></input>
            <label htmlFor="">Subject</label>
            <input type="text"></input>
            <label htmlFor="">Message</label>
            <textarea name="" id=""  rows="6" placeholder="Type Your message here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form