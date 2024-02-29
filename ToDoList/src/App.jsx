import { useState } from 'react'
import './App.css'
import Todoinput from './assets/component/Todoinput'
import Todolist from './assets/component/Todolist';

function App() {
  const [listtodo, setlisttodo] = useState([]);

  let addList = (Inputtext)=>{
    if(Inputtext !== '') 
      setlisttodo([...listtodo, Inputtext])
  }

  const deletelistItem =(key) =>{
    let newListTodo =[...listtodo];
    newListTodo.splice(key ,1);
    setlisttodo([...newListTodo])
  }

  let edititem =(index) =>{
    const todos=  [...Todolist]
    const edittodo= prompt('edit the todo');
    if (editedTodo !== null && editedTodo.trim() !== ''){
      let updatetodos= [...todos]
      updatetodos[index].value = edittodo
      setlisttodo([...updatetodos])
        }

  }
  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <Todoinput addList={addList}/>
          <h1 className="app-heading">TODO</h1>
          <hr />
          {listtodo.map((listItem,i)=>{
            return(
              <Todolist key={i} index={i} item={listItem} deleteItem = {deletelistItem} updateitem={edititem}/>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default App