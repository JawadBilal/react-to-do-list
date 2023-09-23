export const Task = (props) => {
    return (
        <div className='taskList' style={{background: props.completed ? "green" :"#edeef0"}}>
          <div>{props.taskName}</div>
          <div>
          <button onClick={() => props.doneTask(props.id)} style={{background:"green"}}>Done</button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
          </div>
        </div>
      );
};
