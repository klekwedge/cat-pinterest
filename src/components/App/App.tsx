import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import { Container, Loader } from '@mantine/core';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const FavouritePage = lazy(() => import('../../pages/FavouritePage/FavouritePage'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <Router>
      <Header />
      <Container maw="1300px" p="20px 10px">
        <Suspense
          fallback={
            <Container maw="1300px" p="20px 10px">
              <Loader display="block" size="xl" m="0 auto" />
            </Container>
          }
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favourite" element={<FavouritePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
