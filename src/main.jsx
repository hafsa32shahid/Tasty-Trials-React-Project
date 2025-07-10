import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './index.css' ; // Assuming index.css is in src folder
import App from './App';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
