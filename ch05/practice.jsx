import { useState } from 'react'

function Quiz03() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])
   //1.사원명 부서명 뽑기 react는 반복해서 생생할 때는 키를 줘야함

   const employeeList = employees.map((employee) => (
      <li key={employee.id}>
         사원명:{employee.name}, 부서:{employee.dept}
      </li>
   ))
   /*employeeList는 
   <li>사원명:김도도 부서:개발부</li>
   <li>사원명:이레레 부서:개발부</li>
   <li>사원명:박미미 부서 인사부</li>
   <li>사원명:강파파 부서:마케팅부</li>
   */

   const [inputName, setInputName] = useState('')
   const [inputDept, setInputDept] = useState('')
   const [nextId, setNextId] = useState(5)
   
   const onChangeName = (e) => setInputName(e.target.value)
   const onChangeDept = (e) => setInputDept(e.target.value)

   const onClick = () => {
    const nextEmployees = employees.concat({
        id:nextId,
        name: inputName,
        dept:inputDept,
    })

    setEmployees(nextEmployees)
    setNextId(nextId + 1)
    setInputName('')
    setInputDept('')
   }
   

   
   return (
   <><input placeholder='사원이름' value={inputDept} onChange={onChangeName}></input>
   <ul>{employeeList}</ul>
   //2.input 추가창 만들기
  </>
   )
}
   

