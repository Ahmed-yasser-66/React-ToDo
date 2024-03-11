import crossMark from '../images/icon-cross.svg';
import checkMark from '../images/icon-check.svg';

export default function ToDoItems({
  items,
  onDeleteItem,
  toogleItemState,
  completedItems,
  activeItems,
  currShownItems,
}) {
  const selectedItems =
    currShownItems === 'all'
      ? items
      : currShownItems === 'completed'
      ? completedItems
      : activeItems;

  return (
    <div className="todo-box__list">
      {selectedItems.map((item) => (
        <li onClick={() => toogleItemState(item.id)} key={item.id}>
          {item.completed ? (
            <div className="filled-check">
              <img src={checkMark} alt="check mark" />
            </div>
          ) : (
            <div className="empty-check"></div>
          )}

          <p style={item.completed ? { textDecoration: 'line-through' } : null}>
            {item.desc}
          </p>
          <button onClick={() => onDeleteItem(item.id)}>
            <img src={crossMark} alt="cross mark to delete item" />
          </button>
        </li>
      ))}
    </div>
  );
}
