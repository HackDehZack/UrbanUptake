import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './loginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/HeaderArea" element={<HeaderArea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;