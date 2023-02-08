const TodoItem = ({ todo, isCompleted }) => {
    return (
      <li>
        <label>
          <input type="checkbox" Checked={isCompleted} />
          <span>{todo}</span>
        </label>
        <button data-testid="modify-button">수정</button>
        <button data-testid="delete-button">삭제</button>
      </li>
    );
  }
export default TodoItem;