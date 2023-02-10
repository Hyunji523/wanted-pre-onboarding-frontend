import { useEffect, useState } from 'react';
import TodoItem  from '../components/TodoItem';
import * as todo from '../modules/todo';
import '../App.css';

const TodoItemList = ({ todos, editTodo, deleteTodo })=> {

  return (
    <div className="todoapp__list">
      <ul className="todoapp__list-ul">
       
      {todos.map((todo , id) => (
          <TodoItem 
          key={id}
          todo={todo}
          index={id}
          editTodo={editTodo}
          onToggle={() => onToggle(todo.id)}
          deleteTodo={deleteTodo}/>
        ))}

      </ul>
    </div>
  );
}
export default TodoItemList 