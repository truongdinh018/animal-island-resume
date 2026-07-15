import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'animal-island-ui/style';
import './animal-cursor.css';
import './index.css';
import './theme.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
