const Type = (props) => {
   const { str, num, bool, arr, json, func } = props
   const result = func(1, 2)
   return (
      <div>
         <p>StringProps: {str}</p>
         <p>NumberProps: {num}</p>
         <p>BooleanProps: {bool.toString()}</p>
         <p>ArrayProps: {arr.toString()}</p>
         <p>JSONProps: {JSON.stringify(json)}</p>
         <p>FunctionProps: {result}</p>
         {/* <p>FunctionProps: {func(1, 2)}</p> */}
      </div>
   )
}

export default Type
