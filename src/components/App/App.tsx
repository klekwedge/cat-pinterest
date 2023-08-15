import { useEffect, useState } from 'react';
import { getData } from '../../services/CatAPI';
import ICat from '../../types';

function App() {
  const [cats, setCats] = useState<ICat[]>([]);

  useEffect(() => {
    getData().then((data) => setCats(data));
  }, []);

  console.log(cats);

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
            <ul className="cats__list">
              {cats.map((cat) => (
                <li className="cats__item" key={cat.id}>
                  <img src={cat.url} className="cats__image" alt="cat" />
                  <img className='cats__like' src="/public/png/hollow-heart.png" alt="like icon" />
                </li>
              ))}
            </ul>
            <ul className="cats__list_favourite" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
