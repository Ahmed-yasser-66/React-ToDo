import { useState } from 'react';
import Header from './Header';
import ToDoForm from './ToDoForm';
import ToDoItems from './ToDoItems';
import Stats from './Stats';
import { useLocalStorage } from '../hooks/useLocalStorage';

function App() {
  const [theme, setTheme] = useState('dark');
  const [todoItems, setTodoItems] = useLocalStorage([], 'todoItems');
  const [currShownItems, setCurrShownItems] = useState('all');

  const completedItems = todoItems.filter((item) => item.completed) || [];
  const activeItems = todoItems.filter((item) => !item.completed) || [];

  function toogleTheme() {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  function handleAddItem(item) {
    setTodoItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setTodoItems((items) => items.filter((item) => item.id !== id));
  }

  function toogleItemState(id) {
    setTodoItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function filterActive() {
    setCurrShownItems('active');
  }

  function filterCompleted() {
    setCurrShownItems('completed');
  }

  function filterAll() {
    setCurrShownItems('all');
  }

  function handleClearCompleted() {
    setTodoItems((items) => items.filter((item) => !item.completed));
  }

  return (
    <div className="app" id={theme}>
      <main className="todo-box">
        <Header theme={theme} onToogleTheme={toogleTheme} />
        <ToDoForm onAddItem={handleAddItem} />
        <ToDoItems
          items={todoItems}
          onDeleteItem={handleDeleteItem}
          toogleItemState={toogleItemState}
          completedItems={completedItems}
          activeItems={activeItems}
          currShownItems={currShownItems}
        />
        <Stats
          items={todoItems}
          filterActive={filterActive}
          filterCompleted={filterCompleted}
          filterAll={filterAll}
          currShownItems={currShownItems}
          onClearCompleted={handleClearCompleted}
        />
      </main>
    </div>
  );
}

export default App;
