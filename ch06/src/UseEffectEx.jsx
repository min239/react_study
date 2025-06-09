import { useState, useEffect } from 'react'

function UseEffectEx() {
   //
   const [name, setName] = useState('')
   const [nickName, setNickName] = useState('')

   //useEffect는 실행되는 시점을 아는게 중요
   //1.useEffect사용방법 컴포넌트가 렌더링 될때마다 실헹
   // useEffect(() => {
   //    //다시 렌더링
   //    //  console.log('렌더링이 완료되었습니다.')
   //    //  console.log({ name, nickName }) // json 객체 만들떄 키와 벨류  name:name, nickName:nickName 원래는 이렇게 작성 하지만 키와 값으로 오는 변수명이 같으면 위에 처럼 생략해서 작성
   // })
   //2.맨 첨음 렌더링이 될떄만 실행되고, 업데이트(리렌더링) 될때는 실행되지 않음,실행하고 그 이후에는 실행하지 않음
   // useEffect(() => {
   //    console.log('렌더링이 완료되었습니다.')
   //    console.log({ name, nickName })
   // }, [])

   // 3.특정값이 변경될때만 호출
   // useEffect(() => { // 맨 처음에 렌더링이 될때 실행되고,특정값이 변경될떄만 호출
   //    console.log('렌더링이 완료되었습니다.')
   //    console.log({ name, nickName })
   // }, [name])

   //4.뒷정리 함수
   useEffect(() => {
      console.log('렌더링이 완료되었습니다.')
      console.log(name)

      return () => {
         console.log('컴포넌트가 리렌더링 되기전..')
         console.log(name) //return 라렌더링 되기전에 실행
      }
   }, [name]) //[]빈배열은 최초로 한번 실행하고 그 이후에는 실행 x
   //[name]특정값이 변경될떄 실행

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickName = (e) => setNickName(e.target.value)

   return (
      <div>
         <div>
            <input type="text" value={name} onChange={onChangeName} />
            <input type="text" value={nickName} onChange={onChangeNickName} /> {/*입력할떄 마다 state 바뀜 */}
         </div>
         <div>
            <div>
               <b>이름:</b>
               {name}
            </div>
            <div>
               <b>닉네임:</b>
               {nickName}
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
