import React from 'react';
import { useState } from 'react';
import '../App.css'

let TodoList = ({todoItem, todoList, setTodoList})=>{

    const onKeyPress = (e) => {
        if (e.key === 'Enter'){
            modifyInput();
        }
    }

    const onChangeCheckbox = ()=>{
        const nextTodoList = todoList.map((item) => ({
            ...item,
            //checked toggle
            checked: item.id === todoItem.id ? !item.checked : item.checked
        }));

        setTodoList(nextTodoList)
    }

    const [modify, setModify] = useState(false);
    const [newText, setnewText] = useState('');
    //수정모드로
    const modifyBtn = ()=>{
        setModify(true);
    }
    const modifyInput = ()=>{
        //새로운 아이템 내용
        const nextTodoList = todoList.map((item)=>({
            ...item,
            //todo 다시 생각해보기
            text: item.id === todoItem.id ? newText : item.text //새 아이템 내용
        }));
        setTodoList(nextTodoList); // 새 리스트 넣어
        setModify(false); //수정완료
    }

    const delBtn = ()=>{
        const delList = todoList.filter( (item) => item.id !== todoItem.id);
     
        setTodoList(delList);    
    }

    return (
        <li className="todoapp__item">
            {/* 아이템 완료 체크 / 체크 해제를 위한 체크박스 */}
            <input 
                type="checkbox" 
                className="todoapp__item-checkbox"
                checked={todoItem.checked}
                onChange={onChangeCheckbox} />

            {/* 아이템 내용 : 완료되면 취소선 그려지게 css 클래스 이름 바꿔*/}
            {
                !modify ? (<span 
                    className={!todoItem.checked ? "todoapp__item-ctx" : "todoapp__item-ctx_checked"}>
                        {todoItem.text}
                </span>) : (<input className='modify-input' value={newText} onChange={ (e) => { setnewText(e.target.value); }} onKeyDown={onKeyPress}/>)
            }

            {/*  수정 버튼 */}
            {
                !todoItem.checked ? (
                    modify ? (
                    <button type="button" className="todoapp__item-edit-btn" onClick={modifyInput}> ✔️ </button> 
                    ):(<button type="button" className="todoapp__item-edit-btn" onClick={modifyBtn}> 📝 </button>)
                ) : null
            }
            
            {/* 삭제 버튼 */}
            <button type="button" className="todoapp__item-delete-btn" onClick={delBtn}> 🗑️ </button>
        </li>
    )
}
export default TodoList;