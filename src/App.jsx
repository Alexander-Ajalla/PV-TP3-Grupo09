import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Footer from "./components/footer";


function App() {
  const [tasks, setTasks] = useState([]); // Estado de lista de tareas

  // Función para agregar una nueva tarea (se pasa al TaskInput como prop)
  const addTask = (newTaskText) => {
    const newTask = {
      id: Date.now(), // Genera un ID único
      text: newTaskText, // Texto de la tarea
      completed: false, // Estado inicial
    };
    setTasks((prev) => [...prev, newTask]); // Agrega la nueva tarea al estado
  };
  const toggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <Header />
      <h1>Mis Tareas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
      <Footer />
    </div>
  );
}

export default App;
