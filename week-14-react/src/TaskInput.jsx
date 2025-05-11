import React from "react";

function TaskInput({ newTask, onInputChange, onAddTask }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={onInputChange}
            />
            <button className="add-button" onClick={onAddTask}>
                Add
            </button>
        </div>
    );
}

export default TaskInput;
