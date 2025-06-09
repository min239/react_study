function App() {
   const type = 'radio'
   const str = 'string'
   const number = 0
   //disabled={true} input에서 활성화기능
   // disabled={str && number} -> disabled={false}
   return (
      <>
         <input type="text" value="리엑트" disabled={true} />
         <br />
         <input type="text" value="자바스크립트" disabled={str && number} />
         <br />
         <input type={type} checked={true} /> 선택1
         <br />
         {/* str || number -> ture || false -> true*/}
         <input type={type} checked={str || number} /> 선택2
      </>
   )
}

export default App
