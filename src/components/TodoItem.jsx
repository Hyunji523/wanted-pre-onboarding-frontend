import React ,{ useEffect, useState } from "react";
import '../App.css';

const TodoItem = ({ todo, isCompleted }) => {

    useEffect(()=>{
        console.log('todoitem',todo);
    },[])

    const [modify, setModify] = useState(false);
    const modifyBtn = ()=>{
        setModify(true);
    }
    const modifyInput = ()=>{
        //todo api update
        setModify(false);
    }
    const delBtn = ()=>{
        //todo api delete
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