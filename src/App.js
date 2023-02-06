import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Home></Home>
      <Routes>
        <Route path='signin' element={<SignIn></SignIn>} />
        <Route path='signup' element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
