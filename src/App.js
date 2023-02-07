import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import TodoHome from './components/TodoHome';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/todo' element={<TodoHome/>} />
      </Routes>
    </div>
  );
}

export default App;
