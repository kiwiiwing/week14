import React from "react";

function TaskItem({ task, onDelete }) {
    return (
        <li>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={onDelete}>
                Delete
            </button>
        </li>
    );
}

export default TaskItem;
