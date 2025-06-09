import { useEffect, useState } from "react";

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickName, setNickName] = useState('')

   //1useeffect는 실행되는 시점을 아는게 중요 컴포넌트가 렌더링 될때마다 실행

//    useEffect(() => {
//       console.log('렌더링이 완료되었습니다')
//       console.log({ name, nickName })
//    })
   // console.log({ name, nickName}) json객체 만들때 key, value  name:name, nickName:nickName 원래는 이렇게 작성하지만 key와 vlaue 값으로 오는 변수명이 같으면 위에 처럼 생략해서 작성

   //멘처음 렌더링이 될때만 실행되고, 엡데이트(리렌더링)될때는 실행되지 않음, 실행하고 그 이후에는 실행하지 않음
//    useEffect(() => {
//     console('렌더링이 완료되었습니다.')
//     console.log({ name, nickName})
//    }, [])
//특정값이 변경될때만 호출, 맨처음 렌더링 될떄만 실행되고, 특정값(주로state)이 변경될만 호출
useEffect(() => {
    console.log('렌더링이 완료되었습니다.')
    console.log({ name, nickName })
}, [name]) //name의 state가 바뀔떄만 실행되므로 이름을 입력
   
}