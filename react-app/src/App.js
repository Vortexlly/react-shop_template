import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="main">
      <Header/>
      <main className="main__section">
        <div className="main__wrapper">
          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default App
