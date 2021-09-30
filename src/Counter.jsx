import React from 'react';
import {useSelector , useDispatch }from 'react-redux';
import {decrement ,increment} from '../src/CounterSlice'

export function Counter() {
    const count = useSelector((state)=> state.count.value)
    const dispatch = useDispatch()
  
        return (
            <div>
                <h1>COUNT:{count}</h1>
                <button onClick= {()=>dispatch(increment())}>increase</button>
                <button onClick= {()=>dispatch(decrement())}>decrease</button>
                
            </div>
        );
    }


export default Counter;
