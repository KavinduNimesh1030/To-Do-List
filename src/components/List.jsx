import React, { useEffect, useState } from 'react'

export const List = () => {
  const [workData,setWorkData] = useState([])

  useEffect(()=>{
    console.log("component loaded")
    const data = localStorage.getItem('formDetails')
    setWorkData(JSON.parse(data))   
  },[])

  return (
    <div>
      {}
        <li></li>
    </div>
  )
}
