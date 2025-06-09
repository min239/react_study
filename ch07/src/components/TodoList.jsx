import './css/TodoList.css'
import TodoListItem from './TodoListItem'

function TodoList({ todos, onRemove, onToggle }) {
   //애내들은 최종적으로 TodoListItem보내야함
   //todolist에 하나씩 전달 todos는 배열데이터 이기떄문에 map을 이용해서 반복출력
   //todo안에
   /*0: {id: 1, text: '헬스장 가기', checked: true}
1: {id: 2, text: '점심약속', checked: true}
2: {id: 3, text: '리액트 복습', checked: false}

*/
   return (
      <div className="TodoList">
         {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
         ))}
      </div>
   )
}

export default TodoList
