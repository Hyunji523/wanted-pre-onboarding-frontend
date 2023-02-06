import '../App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h2>home</h2>
      <Link to="/">홈</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/signin">로그인</Link>
    </div>
  );
}

export default Home;