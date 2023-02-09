import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem  from '../components/TodoItem';
import '../App.css';

const TodoItemList = ()=> {
  const [todos, setTodos] = useState();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    async function getTodos() {
      axios
        .get('https://pre-onboarding-selection-task.shop/todos', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setTodos(response.data);
          console.log(response.data);
        });
    }
    getTodos();
  }, []);

  return (
    <div className="todoapp__list">
      <ul className="todoapp__list-ul">
       
      {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} id={todo.id}/>
        ))}
          
        
      </ul>
    </div>
  );
}
export default TodoItemList 