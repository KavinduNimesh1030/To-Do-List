import React, { useEffect, useState } from 'react'

export const MainPage = () => {
    const [work,setWork] = useState("");
    const [duWork,setDuWork] = useState("");
    const [workDetails,setWorkDetails]= useState("");
    
    
    const handleOnSubmit =(e) =>{
        e.preventDefault();
        
        const workList = {
            newWork : work
        }

      setWorkDetails([...workDetails,workList]);    
        
    }

    useEffect(()=>{
        localStorage.setItem('workDetails',JSON.stringify(workDetails))
    },[workDetails])

    const submitbtnOnClick =()=> {
        alert("sss");

        const newList  = localStorage.getItem("workDetails");
        console.log(newList);
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
            </form>
        </div>
    </div>
  )
}
