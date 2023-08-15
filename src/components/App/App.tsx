import { lazy, Suspense  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const FavouritePage = lazy(() => import('../../pages/FavouritePage/FavouritePage'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
