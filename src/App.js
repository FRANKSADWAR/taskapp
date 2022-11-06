import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';


/**
 * 
 * @returns the function components as defined by the React Application
 * Also note that the app usually makes it easy to handle effects and the state of the components
 */


function AppFunction(){
  const [newTask, setNewTask] = useState({});
  const handleChange = ({target}) => {
    const {name, value} = target;
    setNewTask((prevState)=> ({
        ...prevState,
        [name]: value,
        id: Date.now()
    }));
  };

  const [ allTasks, setAllTasks ] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newTask.title) return;
    setAllTasks((prev) => ([newTask,...prev]));
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) =>{
    setAllTasks((prev)=> prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  return (
    <div>
      <NewTask
        newTask={newTask}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
      />

      <TaskList
        allTasks={allTasks}
        handleDelete={handleDelete}
      />
    </div>
  )
}

function TaskList({allTasks, handleDelete}){
  return (
    <ul>
      {allTasks.map( ({title, description, id})=>(
        <li key={id}>
            <div>
              <h2>{title}</h2>
              <button onClick={()=>handleDelete(id)}>X</button>
            </div>
            {!description ? null : <p>{description}</p>}
        </li>
      ) )}
    </ul>
  );
}

function NewTask({newTask, handleChange, handleSubmit}){
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New Task"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <div>
          <textarea
            name="description"
            placeholder="Details"
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button type="submit">Add Task</button>
        </div>
      )}
    </form>
  );
}

export default AppFunction;