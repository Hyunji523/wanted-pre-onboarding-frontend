import React, { useState, useEffect } from 'react';
import TodoItemList from './TodoItemList';
import * as todo from '../modules/todo';
import '../App.css';

const TodoHome = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    const changeNewTodo = (event) => {
      setNewTodo(event.target.value);
    };
  
    const getTodos = async () => {
      const response = await todo.getTodos();
      if (response !== undefined) {
        setTodos(response);
      }
    };
    const handleCreateTodo = async (event) => {
      event.preventDefault();
      const response = await todo.createTodo({ todo: newTodo });
      if (response != undefined) {
        setTodos([...todos, { todo: newTodo }]);
        setNewTodo('');
        window.location.reload();
      }
    };
  
    const editTodo = async (_id, _todo, _isCompleted) => {
      const response = await todo.updateTodo({
        id: _id,
        todo: _todo,
        isCompleted: _isCompleted,
      });
      if (response != undefined) {
        setTodos(
          todos.map((todo) =>
            todo.id === response?.id
              ? {
                  ...todo,
                  todo: response.todo,
                  isCompleted: response.isCompleted,
                }
              : todo,
          ),
        );
      }
    };
  
    const deleteTodo = async (_id) => {
      await todo.deleteTodo({ id: _id });
      setTodos(todos.filter((todo) => todo.id !== _id));
    };

  //투두화면 렌더링될때 로컬스트리지에 토큰 없으면 /으로 이동 
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token === null) {
      window.location.replace('/signin')
    }
    getTodos(); // 투두리스트 가져와
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
      
      <form onSubmit={handleCreateTodo}>
        <div className="todoapp__inputbox">
        <input
          className="todoapp__inputbox-inp"
          onChange={changeNewTodo}
          value={newTodo}
          data-testid="new-todo-input"
          type="text"
          id="outlined-textarea"
          label="Add to-do"
          placeholder="할 일을 입력해주세요.">
        </input>
        <button
            data-testid="new-todo-add-button"
            type="submit"
            variant="contained"
            className="todoapp__inputbox-add-btn">
            추가
        </button></div>
      </form>

      <TodoItemList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo}/>

    </div>
  )
};

export default TodoHome;