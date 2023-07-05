import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carrosel from 'Pages/Carrossel';
import { Footer } from 'Pages/Footer/footer';
import Header from 'Pages/Header';
import Principal from 'Pages/Principal';
import Cards from 'Pages/Principal/Cards';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <Principal/>
    <Carrosel/> 
    <Footer/>
  </React.StrictMode>
);