import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
//if statement prevents blank tasks
    function addTask() {
        if (newTask.trim() !== "") {
//t represents tasks
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
//inside new updatedTasks, i is index but renamed to differentiate between index in deleteTask
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <TaskInput 
                newTask={newTask}
                onInputChange={handleInputChange}
                onAddTask={addTask}
            />
            <ol>
                {tasks.map((task, index) => (
                    <TaskItem 
                        key={index}
                        task={task}  //prop
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;


