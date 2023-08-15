import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container _container">
        <nav className="header__menu menu">
          <ul className="menu__list">
            <NavLink
              className="menu__button"
              to="/"
              style={({ isActive }) => (isActive ? {   background: '#1e88e5' } : { background: '#2196f3' })}
            >
              Все котики
            </NavLink>
            <NavLink
              className="menu__button"
              to="/favourite"
              style={({ isActive }) => (isActive ? {   background: '#1e88e5' } : { background: '#2196f3' })}
            >
              Любимые котики
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
