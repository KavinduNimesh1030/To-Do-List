import React, { useState } from 'react'

export const MainPage = () => {
    const [work,setWork] = useState("");
    const handleOnSubmit =(e) =>{
        e.preventdefault();
    }
  return (
    <div>
        <div>
            <h1>My To-Do List</h1>
            <form id='mainForm' onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Work' onChange={e=>setWork(e.target.value)}value ={work}/>
            <button type='submit'>+Add</button>
            </form>
        </div>
    </div>
  )
}
