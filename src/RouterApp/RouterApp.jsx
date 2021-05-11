import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './RouterApp.css';

const RouterApp = ({children}) => (
    <div className="c-router-app">
      <Header />
      {children}
      <Footer />
    </div>
)

export default RouterApp;
