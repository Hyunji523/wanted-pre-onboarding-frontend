import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import TodoItemList from './TodoItemList';

const TodoHome = () => {
  //투두화면 렌더링될때 로컬스트리지에 토큰 없으면 /으로 이동 
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token === null) {
      window.location.replace('/signin')
    }
  }, []);
  let email = localStorage.getItem('email');
  
  return (
    <div className="page"> 
      <div className='titleWrap'>{email}님의 Todo List</div>

      <TodoItemList/>

    </div>
  )
};

export default TodoHome;