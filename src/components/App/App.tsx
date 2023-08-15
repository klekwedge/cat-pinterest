function App() {
  return (
    <div>
      <header className="header">
        <div className="header__container _container">
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <button type="button" className="menu__button _active">
                  Все котики
                </button>
              </li>
              <li className="menu__item">
                <button type="button" className="menu__button" data-favourite>
                  Любимые котики
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="page">
        <section className="page__cats cats">
          <div className="cats__container _container">
            <div className="testOPA" />
            <ul className="cats__list" />
            <ul className="cats__list_favourite" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
