import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './index.css';
import Apresentacao from "./Pages/Apresentacao";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrosel from 'Pages/Carrossel';
import { Footer } from 'Pages/Apresentacao/Footer/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Apresentacao/>
    <Carrosel/> 
    <Footer/>
  </React.StrictMode>
);


