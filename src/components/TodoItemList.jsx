import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem  from '../components/TodoItem';

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
          console.log('todo',todos)
        });
    }
    getTodos();
  }, []);

  return (
    <>
      <ul>
      <ul>
        {todos.map((todo) => (
          
          <TodoItem todo={todo.todo} isCompleted={todo.isCompleted}/>
          
        ))}
      </ul></ul>
    </>
  );
}
export default TodoItemList