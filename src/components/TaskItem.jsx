import React from "react";
import "./TaskItem.css";

function TaskItem({item, onToggleComplete, onDelete}) {
  const textClassComplete = item.completed ? "task-text completed" : "task-text";

  return (
    <li className="task-item">
        <span className={textClassComplete}>{item.text}</span>
      <button className="btn" onClick={() => onToggleComplete(item.id)}>Realizada</button>
      <button  className="btn" onClick={() => onDelete(item.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;

