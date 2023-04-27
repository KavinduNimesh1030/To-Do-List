import React, { useEffect, useState } from 'react'
import { List } from './List';

export const MainPage = () => {
    const [work,setWork] = useState("");
    const [workDetails,setWorkDetails]= useState("");
    const [todoList, setTodoList] = useState([]);
    const [duTodoList, setDuTodoList] = useState([]);
    
    
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
    const handleComplete =(id)=>{
      alert("id : "+id);
      for (const i of todoList) {
        if(i.id == id){
          setWork(i.task);

     }

    }
  }
  //Delete Work
  const handleOnDelete =(id)=>{
  const deleteData = todoList.filter((ele,index)=>{
      return ele.id !== id
    })
    setTodoList(deleteData)
}

    useEffect(()=>{
        localStorage.setItem('workDetails',JSON.stringify(workDetails))
    },[workDetails])

   
  return (
    <div>
        <div>
            <h1>My To-Do List</h1>
            <form id='mainForm' onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Work' onChange={e=>setWork(e.target.value)}value ={work}/>
            <button type='submit'>+Add</button>
            
            <div>
  {todoList.map((todo) => {
    return (
      <li key={todo.id}
        id={todo.id}
        // onClick={() => handleComplete(todo.id)}
        >
        {todo.task}
        <button onClick={()=>handleOnDelete(todo.id)}>-</button>
        <button>u</button>
        <button>c</button>
      </li>
    );
  })}
</div>
            </form>
        </div>
    </div>
  )
}
