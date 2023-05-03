import React, { useEffect, useState } from 'react'
import { List } from './List';
import './MainPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faDeleteLeft, faPencil, faRecycle, faRightLeft, faTrash } from '@fortawesome/free-solid-svg-icons'



export const MainPage = () => {
    const [work,setWork] = useState("");
    const [workDetails,setWorkDetails]= useState("");
    const [todoList, setTodoList] = useState([]);
    const [listId,setListId] = useState();
    const [completeTask,setCompleteTask] = useState();
    
    
    const handleOnSubmit =(e) =>{

        e.preventDefault();

        const workList = {
            newWork : work
        }

      var btn = document.getElementById("btnSubmit").innerText;
      
      //if btn inner text == +Add,we Add new task
      if(btn == "+Add"){

        //genarate new id 
        const id = todoList.length + 1;

        setTodoList((prev) => [
          ...prev,
          {
            id: id,
            task: work,
            complete: false,
          },
        ]);
        setWork("");

      }else{

      //id btn inner text not equal to +Add, we update the task
      const updatedTodos = todoList.map(todo => {
      if (todo.id === listId) {
        return { ...todo, task: work ,complete : completeTask};
      }
      return todo;
    });
    setTodoList(updatedTodos);
    document.getElementById("btnSubmit").innerText ="+Add"
    setWork("");

   }

      setWorkDetails([...workDetails,workList]);    
        
    }

    //completed task
    const handleOnComplete =(id)=>{
      var t = '';
      
      todoList.map(todo => {
        if (todo.id === id) {
          t =todo.task;
        }
       
      });
      // setTodoList(completedTodos);

        setWork(t)
       setListId(id);
       setCompleteTask(true);

      // document.body.className = "AnErrorHasOccured";
      document.getElementById(id).className = "AnErrorHasOccured";
      document.getElementById("btnSubmit").innerText ="aa"
     
  }
  
 

  //Delete Work
  const handleOnDelete =(id)=>{
  const deleteData = todoList.filter((ele,index)=>{
      return ele.id !== id
    })
    setTodoList(deleteData)
}

// update Work
const handleOnUpdate = (id) => {

  //set detail in to textfeild that want to update
   todoList.filter((ele,index)=>{
    if(ele.id == id){

      setWork(ele.task);
      return ele.task;
    }
     
    })
    //set id in selected object
    setListId(id);

    //Change main button text 
    document.getElementById("btnSubmit").innerText ="Update"
};

    useEffect(()=>{
        localStorage.setItem('workDetails',JSON.stringify(workDetails))
    },[workDetails])

   
  return (
    
    <div id='mainDiv'>
        <div>
            <h1 id='lblMain'>My To-Do List</h1>
            <form id='mainForm' onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Work' id='txtTask' onChange={e=>setWork(e.target.value)}value ={work}/>
            <button type='submit' id='btnSubmit'>+Add</button>
            
            <div>
  {todoList.map((todo) => {
    return (
      <li 
        id={todo.id}
        key={todo.id}
        // onClick={() => handleComplete(todo.id)}
        >
        {todo.task}
 
     <button onClick={()=>handleOnDelete(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={()=>handleOnUpdate(todo.id)} id={todo.id} type='button'>
        <FontAwesomeIcon icon={faPencil} />
        </button>
        <button onClick ={()=>handleOnComplete(todo.id)} id ={todo.id}>
        <FontAwesomeIcon icon={faCheckSquare} />
        </button>
  
      </li>
    );
  })}
</div>
            </form>
        </div>
    </div>
  )
}
