import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const FavouritePage = lazy(() => import('../../pages/FavouritePage/FavouritePage'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
    </Router>
  );
}

export default App;
