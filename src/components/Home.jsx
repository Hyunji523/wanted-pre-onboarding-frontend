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
      <div className='titleWrap'>HOME</div>
      <div className='contentWrap'>
      <Link to="/"></Link>
      <Link to="/signup"><button className='bottomButton'>회원가입</button></Link>
      <Link to="/signin"><button className='bottomButton'>로그인</button></Link>
      </div>
    </div>
  );
}

export default Home;