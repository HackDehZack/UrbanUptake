import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './loginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/LoginPage' exact={true} component={LoginPage} />
        <Route path='/HeaderArea' exact={true} component={HeaderArea} />
      </Routes>
    </div>
  );
}

export default App;