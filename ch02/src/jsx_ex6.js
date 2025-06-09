function App() {
   // css인라인 스타일 적용
   const name = '리엑트'
   //json객체로 작성 값(속성값)을 문자열로 줘야함 css속성은 카멜표기법
   const style = {
      backgroundColor: 'red', //카멜표기법
      color: 'black',
      fontSize: '48px', //카멜표기법
      padding: 16, //단위 생략시 px로 지정
   }

   //  return <div style={style}>{name}</div>

   //혹은 다르게 작성 json 객체자체를  style에 지정
   return (
      <div
         style={{
            backgroundColor: 'red', //카멜표기법
            color: 'black',
            fontSize: '48px', //카멜표기법
            padding: 16, //단위 생략시 px로 지정
         }}
      >
         {name}
      </div>
   )
}

export default App
