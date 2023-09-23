import { useState } from 'react';
import './App.css';
import {Task} from "./Task";

import icon from "../src/images/icon.png";


function App() {
  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const inputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todolist, task]);
  };
  const doneTask = (id) => {
    setTodoList(
      todolist.map((task)=>{
        if(task.id === id){ return{...task, completed:true};}
        else{return task;} 
      })
    );
  };

  const deleteTask = (id) => {
    setTodoList(todolist.filter((task) => task.id !== id));
  };


  return (
    
    <div className="App">
      <div className='main'>
      <h2>To-Do List <img src={icon} alt="icon"/></h2>
        <div className='addTask'>
          <input type='text' onChange={inputChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {todolist.map((task)=>{
            return <Task 
            taskName={task.taskName}
            id = {task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            doneTask={doneTask}
            />
            
          })}
          
        </div>

      </div>
      
      
      
    </div>
  );
}



export default App;
