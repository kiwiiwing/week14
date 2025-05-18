import React, { useState } from "react";

function TaskItem({ task, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    function handleSave() {
        onEdit(editedText);
        setIsEditing(false);
    }

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        value={editedText}
                        onChange={e => setEditedText(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span>{task.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}

export default TaskItem;

