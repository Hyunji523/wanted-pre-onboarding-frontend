import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './conponents/SignIn';
import SignUp from './conponents/SignUp';

function App() {
  return (
    <div>
      <h3>preonboarding assignment</h3>
      <Routes>
        <Route path='signin' element={<SignIn></SignIn>} />
        <Route path='signup' element={<SignUp></SignUp>} />
      </Routes>
      <Link to="/">홈</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/signin">로그인</Link>
    </div>
  );
}

export default App;
