import React from "react";

function TaskItem({ task, onToggleComplete, onDelete }) {
  const taskTextClasses = task.completed ? "task-text completed" : "task-text";

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span className={taskTextClasses}>
        {task.text}
      </span>

      <button onClick={() => onDelete(task.id)}>
            Eliminar
      </button>
    </li>
  );
}

export default TaskItem;
