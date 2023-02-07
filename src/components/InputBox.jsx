import React, { useEffect, useRef, useState } from 'react';
import '../App.css'

let InputBox = ({todoList, setTodoList})=>{ //부모 컴포넌트(Home.jsx)로 부터 props로 todoList와 setTodoList를 받아온다.
    let [text, setText] = useState('');
    let inputRef = useRef(null);

    //기능 확인
    useEffect(() => {
        //tosoList 변경될때만 실행
        console.log(todoList);
    },[todoList]);

    //input 값 업데이트
    let onChangeInput = (e)=>{
        setText(e.target.value)
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter'){
            onClickAddBtn();
        }
    }
    let onClickAddBtn = ()=>{
        //todlist에 값 추가
        const nextTodo = todoList.concat({ //concat 함수는 인자로 받은 값을 배열에 추가하여 새로운 배열을 반환한다.
            id: todoList.length,
            text,
            checked: false 
        });
        setTodoList(nextTodo);

        setText(''); //input 초기화
        inputRef.current.focus(); //input으로 포커스
    }

    return (
        <div className="todoapp__inputbox">
            {/* 아이템 내용 입력 input */}
            <input
                type="text"
                name="todoItem"
                placeholder="할 일을 입력해주세요"
                className="todoapp__inputbox-inp"
                value={text}
                ref={inputRef}
                onChange={onChangeInput}
                onKeyDown={onKeyPress}
                data-testid="new-todo-input"
            />
            {/* 입력 후 아이템 추가 버튼 */}
            <button type="submit" className="todoapp__inputbox-add-btn" onClick={onClickAddBtn} data-testid="new-todo-add-button" >
            추가
            </button>
        </div>
    )
}


export default InputBox;