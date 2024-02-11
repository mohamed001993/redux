import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTask, Edit } from './Redux/action'

function Task({el}) {
    const disptach=useDispatch()
    const [boolean,setboolean]=useState()
    const [EditTask,setEditTask]=useState()

    const handleclick=()=>{
      disptach( Edit(el.id, EditTask))
      setboolean(false)
    }
  return (
    <div className='task-container' style={{display:"flex",gap:"57px"}}    >
      <p>id:{el.id}</p>
      <p>{el.description}</p>
      <input type="checkbox"   checked={el.isDone}  />

      <button onClick={()=>disptach(DeleteTask(el.id))}   >x</button>
   { boolean ? <> <input className='input_edit' type='text' onChange={(e)=>setEditTask(e.target.value)}/> <button onClick={()=>handleclick() }>save</button></>: null}
      <button  onClick={()=>setboolean(!boolean)}  >Edit</button>
    </div>
  )
}

export default Task

