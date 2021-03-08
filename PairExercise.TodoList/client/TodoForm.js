import React from 'react';

function TodoForm(props) {
  const { handleSubmit, handleChange, taskName, assignee } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>Task Name: </label>
      <input type="text" name="taskName" onChange={handleChange} value={taskName} />
      <label>Assign To: </label>
      <input type="text" name="assignee" onChange={handleChange} value={assignee} />
      <button disabled={!taskName || !assignee}>Submit</button>
    </form>
  );
}

export default TodoForm;
