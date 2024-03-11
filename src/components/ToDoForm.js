import { useState } from 'react';

export default function ToDoForm({ onAddItem }) {
  const [description, setDescription] = useState('');

  function handelSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      desc: description,
      completed: false,
      id: crypto.randomUUID(),
    };

    onAddItem(newItem);
    setDescription('');
  }

  return (
    <form className="todo-box__form" onSubmit={handelSubmit}>
      <div className="empty-check"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}
