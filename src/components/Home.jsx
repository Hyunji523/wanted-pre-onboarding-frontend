import '../App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h2>home</h2>
      <Link to="/"><button>홈</button></Link>
      <Link to="/signup"><button>회원가입</button></Link>
      <Link to="/signin"><button>로그인</button></Link>
    </div>
  );
}

export default Home;