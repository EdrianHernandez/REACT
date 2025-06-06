import React from "react";

function ToDoList() {
    
    const [tasks, setTasks] = React.useState(["Eat", "Shower", "Sleep"]);
    const [newTask, setNewTask] = React.useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }   


    return( <div className="to-do-list"> 

                <h1>To Do List</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter a new task"
                        value={newTask} 
                        onChange={handleInputChange}
                    />
                </div>
                <button className="AddTask" onClick={addTask}>Add Task</button>

                <ol>
                {tasks.map((tasks, index) => (
                    <li key={index}>
                        <span className="text">{tasks}</span>
                            <button className="DeleteTask" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="UpTask" onClick={() => moveTaskUp(index)}>Up</button>
                            <button className="DownTask" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                ))} 
                </ol>
            </div>);  
               
}

export default ToDoList
 