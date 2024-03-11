import SunImage from '../images/icon-sun.svg';
import MoonImage from '../images/icon-moon.svg';

export default function Header({ theme, onToogleTheme }) {
  return (
    <div className="todo-box__header">
      <h1>todo</h1>
      {theme === 'light' ? (
        <img src={SunImage} alt="sun for light mode" onClick={onToogleTheme} />
      ) : (
        <img src={MoonImage} alt="moon for dark mode" onClick={onToogleTheme} />
      )}
    </div>
  );
}
