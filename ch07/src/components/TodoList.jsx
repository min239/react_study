import './css/TodoList.css'
import TodoListItem from './TodoListItem'

function TodoList({ todos, onRemove, onToggle }) {
   
   //애내들은 최종적으로 TodoListItem보내야함
   //todolist에 하나씩 전달 todos는 배열데이터 이기떄문에 map을 이용해서 반복출력
   //todos안에
   /*0: {id: 1, text: '헬스장 가기', checked: true}
1: {id: 2, text: '점심약속', checked: true}
2: {id: 3, text: '리액트 복습', checked: false}

*/
   return (
      <div className="TodoList">
         {todos.map(
            (
               todo //todos 할일이 들어가있는 구조
            ) => (
               <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} /> //key가 있어야함  todo={todo}-> 객체가 하나씩 만들어줌  TodoListItem로 감
            )
         )}
      </div>
   )
}

export default TodoList
