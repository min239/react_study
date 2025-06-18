import { useState } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { useRef } from 'react'
import { useCallback } from 'react'

function App() {
   //app안에 TodoTemplate있고 TodoTemplate안에TodoInsert,TodoList 있다 그래서 부모인 app 값이 바뀌면 전체가 리렌더링
   const [todos, setTodos] = useState([
      //todo가 바뀌면 리렌더링
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   //원래는 state작성해서 했지만 useRef(dom에 접근할 떄도 사용하지만 변수에 접근 할떄도 사용)사용
   /*
   1.nextId를 state로 지정하면 nextId가 바뀔때마다 리렌더링이 불필요하게 발생한다. 
   
   2.const nextId = 4를 사용할 경우 다른 state값(todos)가 바뀔때 리렌더링이 되면서 값이 계속 4로 초기화 된다.
   
   -> 이런 이유들 때문에 useRef를 사용해서 값을 저장하는 것이 좋다
   */
   const nextId = useRef(4)
   //등록버튼 클릭시 실행 과정
   /*ex text에 운동하기
   todo = {
    id:4
    text:운동하기
    checked:false

    todos = 
    [
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
      {
       id:4
       text:운동하기
       checked:false
      } ]
      setTodos(todos.concat(todo))로 인해(concat은 합침) 추가됨
      그래서setTodos에 추가된 데이터가 들어가게 된다.

   */

   //할일 등록 만들기 //todo가 바뀌면 리렌더링되면서 oninser도 리렌더링
   const onInsert = useCallback(
      //이값도 다시
      (text) => {
         //text: 입력한 할일
         // 배열데이트안에 ca
         const todo = {
            //추가할 객체 만들기
            id: nextId.current, //처음에는 4
            text, //text:text 하나로 씀
            checked: false,
         }
         //합친데이터를 바로 todos state에 적용
         setTodos(todos.concat(todo))
         nextId.current += 1 //nextId 1씩 더하기
      },
      [todos]
   )

   //할일 삭제
   const onRemove = useCallback(
      (id) => {
         /*두전째 지우면 ID2번을 지움 todo.id != id 2번과 같지 않은 거는 참 그러면 removeTodos에 저장 그 다음 2번과 비교 그러면 거짓 false이면  removeTodos에 저장x   
         removeTodos  {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 3,
         text: '리엑트복습',
         checked: true,
      },
      */
         const removeTodos = todos.filter((todo) => todo.id != id)
         setTodos(removeTodos) //filter는 리턴해주는 값이 트루일떄 removeTodos에 저장
      },
      [todos]
   )

   //할일 완료, 미완료(토글)
   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) => {
            //map은 배열로 돌아감
            //리엑트 박스 체크시
            /*toggleTodos
            id 1번 선택시 1 === 1 밑에 return실행
      toggleTodos = 
        [{
          id: 1,
         text: '헬스장 가기',
          checked: false,
           id: 2,
         text: '점심약속',
          checked: true,

         }]
            
            */
            return todo.id === id
               ? {
                    ...todo,
                    checked: !todo.checked, //checked 값을 덮어쓴다.
                 }
               : todo
            {
               /*
                  todo = {
                  id: 1,
                  text: '헬스장 가기',
                  checked: true,
                  }
                  */
            }
         })
         setTodos(toggleTodos)
      },
      [todos] //바뀌는 값 todos
   )

   return (
      //props 전달하는 방법 chidren프롭스로 컴포넌트를 전달
      <TodoTemplate>
         {/*todoinsert 컴포넌트에서 할일을 등록하므로 oninsert함수를 props로 전달 실행은 onInsert에서 실행  */}
         <TodoInsert onInsert={onInsert} />
         {/*TdoListItem컴포넌트에서 삭제하므로 onremove 함수를 props로 전달  TodoList갔다가 */}
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
   )
}
export default App
