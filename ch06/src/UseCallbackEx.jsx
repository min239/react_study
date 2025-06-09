import { useCallback, useMemo, useState } from 'react'

//평균구하는 함수
const getAverage = (numbers) => {
   //처움에 numbers는 0
   console.log('평균값 계산...')

   if (numbers.length === 0) return 0

   // numbers= [1,2,3,4]

   const sum = numbers.reduce((a, b) => a + b) //누적합계 처음에 A1 B1 A+B 3 그다음 3 +3 =6 그다음 6+4 = 10
   return sum / numbers.length
}

function UseCallbackEx() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('') //입력하면 number바뀜

   const onChange = useCallback((e) => setNumber(e.target.value), []) //usecallback: 컴포넌트가 리렌더링이 될때 함수가 재생성 되지 않도록 해준다 함수가 재성성되면 성눙애 좋지않다.
   // 컾포넌트가 처음 렌더링 될때만 함수 생성
   
   const onInsert = useCallback(() => {
      const nextList = list.concat(parseInt(number)) //state값이 계속 바뀌기 떄문에 밑에다가 state를 써줘야 한다
      setList(nextList)
      setNumber('')
   }, [number, list]) //number, list state의 값이 바뀔떄만 함수 재생성, !함수안에서 state값을 참조(사용)하는 경우 반드시 state값을 지정해줘야 한다 -> 함수를 재성성하지 않으면 바뀐 state값을 올바르게 가져올 수 없다 

   const avg = useMemo(() => getAverage(list), [list])

   return ( //여기 둠한번 실행
      <div>
         <input type="text" value={number} onChange={onChange} /> {/*1입력시*/}
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            {/* getAverage() 함수 실행, */}
            <b>평균값:{avg}</b> 
         </div>
      </div>
   )
}

export default UseCallbackEx
