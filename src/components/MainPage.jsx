import React, { useEffect, useState } from 'react'
import { List } from './List';

export const MainPage = () => {
    const [work,setWork] = useState("");
    const [duWork,setDuWork] = useState("");
    const [workDetails,setWorkDetails]= useState("");
    const [todoList, setTodoList] = useState([]);
    
    
    const handleOnSubmit =(e) =>{
        e.preventDefault();
        
        const workList = {
            newWork : work
        }

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

      setWorkDetails([...workDetails,workList]);    
        
    }

    useEffect(()=>{
        localStorage.setItem('workDetails',JSON.stringify(workDetails))
    },[workDetails])

    const submitbtnOnClick =(e)=> {
        const newList  = localStorage.getItem("workDetails");
        console.log("newList"+newList);
        setDuWork(newList.newWork);

    }

  return (
    <div>
        <div>
            <h1>My To-Do List</h1>
            <form id='mainForm' onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Work' onChange={e=>setWork(e.target.value)}value ={work}/>
            <button type='submit' onClick={submitbtnOnClick}>+Add</button>
            <h1>*{duWork}</h1>
            <ul>
  {todoList.map((todo) => {
    return (
      <li
      >
        {todo.task}
      </li>
    );
  })}
</ul>;
            </form>
        </div>
    </div>
  )
}
