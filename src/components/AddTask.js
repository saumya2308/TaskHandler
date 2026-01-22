import { useState } from "react";

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

  const handleSubmit = (e) => {
    const date = new Date();
    e.preventDefault();
    if(task.id) {
      const updatedTasklist = tasklist.map((todo) => (todo.id === task.id ? 
      {id:task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo))
      setTasklist(updatedTasklist);
    }
    else{
      const newTask = {
      id:date.getTime(), 
      name: task.name, 
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
      setTasklist([...tasklist, newTask]);
    }
    setTask({ id: "", name: "" });
  }

  return (
    <>
    <div className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" autoComplete="off" placeholder="Add Task" maxLength="25" value={task.name || ""} onChange={e=> setTask({...task, name:e.target.value})}/>
            <button type="submit">Add</button>
        </form>
    </div>
    </>
  )
}
