import React, { useEffect, useState } from 'react'
import Header from "./Header";
function App() {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:8081/users`)
    .then(res=> res.json())
    .then(data=> setData(data))
    .catch(err=>console.log(err));
  }, [])

  return (
    <>
    <div style={{padding:"50px"}}>
      <table>
        <thead>
          <th>ID</th>
          <th>username</th>
          <th>email</th>
          <th>pass</th>
        </thead>
      </table>
      <tbody>
        {data.map((d,i)=>(
          <tr key={i}>
            <td>{d.id}</td>
            <td>{d.username}</td>
            <td>{d.email}</td>
            <td>{d.pass}</td>
          </tr>
        ))}
      </tbody>
    </div>
    
    
    </>
  )
}

export default App