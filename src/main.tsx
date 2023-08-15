import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './components/App/App';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider>
    <App />
  </MantineProvider>,
);
