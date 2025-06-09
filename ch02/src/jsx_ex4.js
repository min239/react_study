function App() {
   const name = undefined
   return (
      // || 앞이 참이면 앞에 결과 값 앞이거짓이면 뒤의 결과 값
      
      <div>{name || '리엑트'}</div>
   )
}

export default App
