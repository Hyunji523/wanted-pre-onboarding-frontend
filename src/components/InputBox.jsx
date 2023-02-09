import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import axios from 'axios';

let InputBox = ()=>{ 
    let [todo, setTodo] = useState('');
    let inputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
    
        const todo = inputRef.current.value;
        if (!todo) return;
    
        const token = localStorage.getItem('access_token');
        axios
          .post(
            'https://pre-onboarding-selection-task.shop/todos',
            { todo },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then(({ data }) => {
            inputRef.current.value = '';
            location.reload();
          });
      }

    //input 값 업데이트
    let onChangeInput = (e)=>{
        setTodo(e.target.value)
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter'){
            onClickAddBtn();
        }
    }

    return (
        <div className="todoapp__inputbox">
            <input
                type="text"
                name="todoItem"
                placeholder="할 일을 입력해주세요"
                className="todoapp__inputbox-inp"
                value={todo}
                ref={inputRef}
                onChange={onChangeInput}
                onKeyDown={onKeyPress}
                data-testid="new-todo-input"
            />
            <button type="submit" className="todoapp__inputbox-add-btn" data-testid="new-todo-add-button" onClick={handleSubmit}>
            추가
            </button>
        </div>
    )
}


export default InputBox;