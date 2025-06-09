import { useMemo, useState } from 'react'

//평균구하는 함수
const getAverage = (numbers) => {
   //처움에 numbers는 0
   console.log('평균값 계산...')

   if (numbers.length === 0) return 0

   // numbers= [1,2,3,4]

   const sum = numbers.reduce((a, b) => a + b) //누적합계 처음에 A1 B1 A+B 3 그다음 3 +3 =6 그다음 6+4 = 10
   return sum / numbers.length
}

function UseMemoEx2() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('') //입력하면 number바뀜

   const onChange = (e) => setNumber(e.target.value)
   const onInsert = () => {
      //nextList = [1] list = [1]
      const nextList = list.concat(parseInt(number)) //parseInt =Number랑 똑같은 기능을 함
      setList(nextList)
      setNumber('') //초기화
   }

   const avg = useMemo(() => getAverage(list), [list]) //list값만 기억했다가 list값만 출력

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

export default UseMemoEx2
