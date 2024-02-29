import React from 'react'

function Todolist(props) {
  return (
   <li className='list-item'>
    {props.item}

    {/* <span className='icon-edit'>
    <i class="fa-regular fa-pen-to-square"
    onClick={props.updateitem(props.index)}></i>
    </span> */}
    <span className='icons'>
    <i className="fa-solid fa-trash icon-delete"
    onClick={e=>{
      props.deleteItem(props.index)
    }}
    ></i>
    </span>

   </li>
   
  )
}

export default Todolist