import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import TodoItemList from './TodoItemList';
import '../App.css';

const TodoHome = () => {
  //투두화면 렌더링될때 로컬스트리지에 토큰 없으면 /으로 이동 
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token === null) {
      window.location.replace('/signin')
    }
  }, []);
  let email = localStorage.getItem('email');
  const logOut = ()=>{
    localStorage.clear();
    window.location.replace('/');
  }
  return (
    <div className="page"> 
      <button className='logout' onClick={logOut}>logout</button>
      <div className='titleWrap'>{email}님의 Todo List</div>
      <InputBox/>
      <TodoItemList/>

    </div>
  )
};

export default TodoHome;