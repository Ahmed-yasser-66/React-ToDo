export default function Stats({
  items,
  filterCompleted,
  filterActive,
  filterAll,
  onClearCompleted,
}) {
  const completed = items.filter((item) => !item.completed);

  return (
    <>
      {items.length > 0 ? (
        <div className="todo-box__stats">
          {completed.length > 1 ? (
            <p>{completed.length} tasks left</p>
          ) : completed.length === 1 ? (
            <p>{completed.length} task left</p>
          ) : (
            <p>Well Done 😎 </p>
          )}
          <div>
            <p onClick={() => filterAll()}>All</p>
            <p onClick={() => filterActive()}>Active</p>
            <p onClick={() => filterCompleted()}>Completed</p>
          </div>
          <p onClick={() => onClearCompleted()}>Clear Completed</p>
        </div>
      ) : null}
    </>
  );
}
