import React, { useState } from 'react'


function Todoinput(props) {

  const [Inputtext, setInputtext] = useState("");
  return (
    <div className='input-container'>
      <input type="text" 
      className='input-box-todo' 
      placeholder='Enter Your Todo '
      onChange={e => { setInputtext(e.target.value) }}
      value={Inputtext}
       />
      <button
        className='add-btn'
        onClick={() => {
          props.addList(Inputtext)
          setInputtext(" ")
        }}>ADD</button>
    </div>
  )
}

export default Todoinput