import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
function Counter() {
const count = useSelector((state) =>state.counter.value)
  const dispatch = useDispatch()
  return (
   <>
   <h1>{count}</h1>
   <button onClick={()=>dispatch(increment())}>+</button>
   </>
  )
}

export default Counter
