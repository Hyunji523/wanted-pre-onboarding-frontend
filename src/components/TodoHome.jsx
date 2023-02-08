import React, { useState, useEffect } from 'react';
import InputBox from '../components/InputBox';
import ToDoItemList from '../components/TodoItemList';

const TodoHome = () => {
  //투두화면 렌더링될때 로컬스트리지에 토큰 없으면 /으로 이동 
  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      window.location.replace('/signin')
    }
  }, []);
  let email = localStorage.getItem('email');
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="page"> 
      <div className='titleWrap'>{email}님의 Todo List</div>
      <InputBox todoList={todoList} setTodoList={setTodoList} />

      {/* 할 일 Item 리스트 */}
      <ToDoItemList
        title={'할 일'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false} // (체크되지 않은) 할 일 목록
      />

      {/* 완료한 Item 리스트 */}
      <ToDoItemList
        title={'완료한 항목'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true} // (체크되어 있는)완료한 목록
      />
        
    </div>
  )
};

export default TodoHome;