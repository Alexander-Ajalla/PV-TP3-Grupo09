import React, { useState } from 'react';

/** 
 * TaskInput es un componente de formulario que permite al usuario
 * ingresar una nueva tarea y enviarla al componente padre mediante props.
 */
function TaskInput(props) {
  // Estado local para manejar el valor del input de texto
  const [inputValue, setInputValue] = useState("");

  /**
   * Maneja los cambios en el input y actualiza el estado
   * @param {object} event - Evento del input
   */
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  /**
   * Maneja el envío del formulario. Si el input no está vacío,
   * llama a la función onAddTask recibida por props para agregar la tarea.
   * Luego limpia el campo de texto.
   * @param {object} event - Evento del formulario
   */
  function handleSubmit(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del form (recarga)
    
    if (inputValue.trim() !== "") {
      props.onAddTask(inputValue); // Llama al callback pasando la nueva tarea
      setInputValue(""); // Limpia el input después de agregar
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de texto controlado */}
      <input
        type="text"
        placeholder="Agregar una tarea..."
        value={inputValue}
        onChange={handleChange}
      />
      
      {/* Botón para enviar el formulario */}
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskInput;

