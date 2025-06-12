import { useState } from 'react'

function ReducerCounter1() {
   const [count, setCount] = useState(0) //특정값을 내가 다 건드림(state값을)

   const down = () => setCount(count - 1)
   const reset = () => setCount(0)
   const up = () => setCount(count + 1)

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter1
