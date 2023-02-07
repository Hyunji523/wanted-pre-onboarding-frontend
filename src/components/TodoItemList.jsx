import React from 'react';
import ToDoItem from './TodoItem';
import '../App.css'

const TodoItemList = ({title, todoList, setTodoList, checkedList}) => (
  <div className="todoapp__list">
    <p className="todoapp__list-tit">{title}</p>
    <ul className="todoapp__list-ul">
        {
            todoList && //tdList가 있을 때만
            todoList.map((todoItem) => {
              // checkedList 값에 따라 '할 일 목록' 또는 '완료한 목록'을 출력
            
              if(checkedList !== todoItem.checked) return null;
                return (<ToDoItem
                    key={todoItem.id}
                    todoItem={todoItem}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />)

            })
        }
    </ul>
  </div>
);

export default TodoItemList;