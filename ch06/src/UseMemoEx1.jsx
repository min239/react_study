import { useState } from 'react'

//평균구하는 함수
const getAverage = (numbers) => {
   //처움에 numbers는 0
   console.log('평균값 계산...')

   if (numbers.length === 0) return 0
   const sum = numbers.reduce((a, b) => a + b) //누적합계
   return sum / numbers.length
}

function UseMemoEx1() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('') //입력하면 number바뀜

   const onChange = (e) => setNumber(e.target.value)
   const onInsert = () => {
      //nextList = [1] list = [1]
      const nextList = list.concat(parseInt(number)) //parseInt =Number랑 똑같은 기능을 함
      setList(nextList)
      setNumber('') //초기화
   }
   return ( //여기 둠한번 실행, 함수는 무조건 리렌더링하니까 usememo써야하나 생각
      <div>
         <input type="text" value={number} onChange={onChange} /> {/*1입력시*/}
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            {/* getAverage() 함수 실행,함수는 다시 실행 그래서 입력할떄 마다 실행 */}
            <b>평균값:{getAverage(list)}</b> 
         </div>
      </div>
   )
}

export default UseMemoEx1
