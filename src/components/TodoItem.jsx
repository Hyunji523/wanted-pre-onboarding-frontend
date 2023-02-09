import React ,{ useEffect } from "react";
import '../App.css';

const TodoItem = ({ todo, isCompleted }) => {

    useEffect(()=>{
        console.log('todoitem',todo);
    },[])

    return (
      <li className="todoapp__item">
          <input type="checkbox" className="todoapp__item-checkbox" defaultChecked={isCompleted} />
          <span className="todoapp__item-ctx">{todo}</span>
        <button type="button" className="todoapp__item-edit-btn" data-testid="modify-button">수정</button>
        <button type="button" className="todoapp__item-delete-btn" data-testid="delete-button">삭제</button>
      </li>
    );
  }
export default TodoItem;