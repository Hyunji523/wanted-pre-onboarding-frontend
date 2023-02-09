import React ,{ useEffect, useState } from "react";
import '../App.css';
import axios from 'axios';

const TodoItem = ({ todo, isCompleted ,id}) => {

    useEffect(()=>{
        
    },[])

    const [upTodo, setUptodo] = useState();
    const [completed, setCompleted] = useState(false);

    const [modify, setModify] = useState(false);
    const modifyBtn = ()=>{
        setModify(true);
    }
    const modifyInput = ()=>{
        //todo api update
        const token = localStorage.getItem('access_token');
        console.log('up',id);
        axios
          .update(
            'https://pre-onboarding-selection-task.shop/todos/'+id, //todo id 추가
            {}, //todo string
            {}, //todo isCompleted
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then(({ data }) => {
            console.log(data)
            location.reload();
          });

        setModify(false);
    }
    const delBtn = ()=>{
        //todo api delete
        const token = localStorage.getItem('access_token');
        console.log('del',id);
        axios
          .delete(
            'https://pre-onboarding-selection-task.shop/todos/'+id, //todo id 추가
            
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then(({ data }) => {
            console.log(data)
            location.reload();
          });

    }
    return (
      <li className="todoapp__item">
          <input type="checkbox" className="todoapp__item-checkbox" defaultChecked={isCompleted} />
        {/* todo text*/}
        {
            !modify ? (<span className="todoapp__item-ctx">{todo}</span>
            ):(<input className='modify-input' />)
        }
        {/* 수정 */}
        {
            !modify ?(<button type="button" className="todoapp__item-edit-btn" onClick={modifyBtn} data-testid="modify-button">수정</button>
            ):(<button type="button" className="todoapp__item-edit-btn" onClick={modifyInput}>제출</button>)
        }
        {/* 삭제 */}
        {
            !modify ? (<button type="button" className="todoapp__item-delete-btn" data-testid="delete-button" onClick={delBtn}>삭제</button>
            ):(<button type="button" className="todoapp__item-delete-btn" onClick={()=>{setModify(false)}}>취소</button>)
        }
        
      </li>
    );
  }
export default TodoItem;