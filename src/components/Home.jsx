import '../App.css';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Home() {

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      window.location.replace('/todo')
    }
  }, []);

  return (
    <div className='page'>
      <div className='title'><h2>home</h2></div>
      <Link to="/"><button>홈</button></Link>
      <Link to="/signup"><button>회원가입</button></Link>
      <Link to="/signin"><button>로그인</button></Link>
    </div>
  );
}

export default Home;