import React, { useEffect, useState } from 'react'
import { List } from './List';

export const MainPage = () => {
    const [work,setWork] = useState("");
    const [workDetails,setWorkDetails]= useState("");
    const [todoList, setTodoList] = useState([]);
    const [duTodoList, setDuTodoList] = useState([]);
    const [updateTask, setUpdateTask] = useState(false);
    
    
    const handleOnSubmit =(e,uId,newWork) =>{
     
        
        const workList = {
            newWork : work
        }

      if(!updateTask){
        e.preventDefault();
        alert("read");
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
      }

      setWorkDetails([...workDetails,workList]);    
        
    }
    const handleComplete =(id)=>{
  
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

// update Work
const handleOnUpdate = (id,newWork) => {
    setUpdateTask(true);
    setWork("ABc");

    // handleOnSubmit(id,newWork);
    // const updatedTodos = todoList.map(todo => {
    //   if (todo.id === id) {
    //     return { ...todo, task: newWork };
    //   }
    //   return todo;
    // });
    // setTodoList(updatedTodos);
};

    useEffect(()=>{
        localStorage.setItem('workDetails',JSON.stringify(workDetails))
    },[workDetails])

   
  return (
    <div>
        <div>
            <h1>My To-Do List</h1>
            <form id='mainForm' onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Work' onChange={e=>setWork(e.target.value)}value ={work}/>
            <button type='submit' id='btnSubmit'>+Add</button>
            
            <div>
  {todoList.map((todo) => {
    return (
      <li 
        id={todo.id}
        // onClick={() => handleComplete(todo.id)}
        >
        {todo.task}
        <button onClick={()=>handleOnDelete(todo.id)}>-</button>
        <button onClick={()=>handleOnUpdate(todo.id,"kavindu")} type='button'>u</button>
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
