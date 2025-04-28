import React, { useState } from 'react';

function TaskInput(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      props.onAddTask(inputValue);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar una tarea..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskInput;
