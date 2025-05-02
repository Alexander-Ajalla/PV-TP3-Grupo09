import React, { useState } from 'react';
import TaskInput from './components/TaskInput'; 

function App() {
  const [tasks, setTasks] = useState([]); // Estado de lista de tareas

  // Función para agregar una nueva tarea (se pasa al TaskInput como prop)
  const addTask = (newTaskText) => {
    const newTask = {
      id: Date.now(),      // Genera un ID único
      text: newTaskText,   // Texto de la tarea
      completed: false     // Estado inicial
    };
    setTasks([...tasks, newTask]); // Agrega la nueva tarea al estado
  };

  return (
    <div>
      <h1>Mis Tareas</h1>
      {/* Acá usás tu componente TaskInput */}
      <TaskInput onAddTask={addTask} />

      {/* Mostramos la lista como prueba */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
