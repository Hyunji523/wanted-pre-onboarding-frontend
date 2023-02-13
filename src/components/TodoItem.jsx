import React ,{ useEffect, useState } from "react";
import '../App.css';

const TodoItem = ({ todo, id, editTodo, deleteTodo }) => {
  const [newTodo, setNewTodo] = useState(todo.todo);
  const [modify, setModify] = useState(false);

  function modifyInput(event) {
    event.preventDefault();
    editTodo(todo.id, newTodo, todo.isCompleted);
    setModify(false);
  }
  
  return (
      <li className="todoapp__item" key={id}>
        
        { modify?( //수정모드
          <form onSubmit={modifyInput}>
          {/* 수정입력창 */}
            <input type="text" className='modify-input' value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}/>
            <button className="todoapp__item-edit-btn" type="submit" data-testid="submit-button" variant="contained">제출</button>
            <button type="button" className="todoapp__item-delete-btn" data-testid="cancel-button" onClick={()=>{setModify(false)}}>취소</button>
          </form>
          ):( //보기모드
            <>
            {/* 체크박스 */}
            <input 
              type="checkbox"
              className="todoapp__item-checkbox"
              checked={todo.isCompleted}
              onChange={(event) => {editTodo(todo.id, todo.todo, event.target.checked);}}
            />
            <span className={!todo.isCompleted ? "todoapp__item-ctx" : "todoapp__item-ctx_checked"}>{todo.todo}</span>
            <button type="button" className="todoapp__item-edit-btn" onClick={() => setModify(true)} data-testid="modify-button">수정</button>
            <button type="button" className="todoapp__item-delete-btn" data-testid="delete-button" onClick={() => deleteTodo(todo.id)}>삭제</button>
            </> )
        }
      </li>
)}
export default TodoItem;