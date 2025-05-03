import React from "react";
import "./TaskItem.css";

function TaskItem({ task, onToggleComplete, onDelete }) {
  const textClassComplete = task.completed ? "task-text completed" : "task-text";

  return (
    <li className="task-item">
      <span className={textClassComplete}>{task.text}</span>
      <button className="btn" onClick={() => onToggleComplete(task.id)}>Realizada</button>
      <button className="btn" onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;

